/**
 * Open Bharat Digital Consent by IDfy
 * Copyright (c) 2025 Baldor Technologies Private Limited (IDfy)
 *
 * This software is licensed under the Privy Public License.
 * See LICENSE.md for the full terms of use.
 *
 * Unauthorized copying, modification, distribution, or commercial use
 * is strictly prohibited without prior written permission from IDfy.
 */

import { getApiContext } from "@/lib/api-auth-middleware";
import { ApiErrors } from "@/lib/api-errors";
import { createSuccessResponse } from "@/lib/api-response";
import {
  createNoticeMetadata,
  createNoticeRecord,
  findBusinessProcessByCodeAndVersion,
  findPublishedBusinessProcessByResourceId,
} from "@/lib/queries/notice-queries";
import {
  createGrantNoticeApiSchema,
  type CreateGrantNoticeApiData,
} from "@/lib/schemas/notice-schemas";
import {
  generateNoticeLinkFromObject,
  getNoticeResourceType,
} from "@/lib/services/notices-service";
import { triggerWebhookEvent } from "@/lib/services/webhook-service";
import { WebhookEventType } from "@prisma/client";
import { NextRequest } from "next/server";
import { NOTICE_METADATA_KEYS } from "@/lib/constants/notice-metadata";

/**
 * Create Grant Notice API
 * POST /cms/api/v1/notices/grant
 *
 * Headers:
 *   Authorization: Bearer <your-api-key>
 *
 * Body:
 *   {
 *     "reference_id": string,
 *     "data_principal_id": string,
 *     "notice_settings": {
 *       "expires_in_hours": number,
 *       "redirection_type"?: "redirect",
 *       "redirection_url"?: string,
 *       "default_language": string,
 *       "view_mode": "purpose_of_processing" | "purpose_of_consent" | "user_attributes"
 *     },
 *     "consent_settings": {
 *       "expires_in_hours"?: number
 *     },
 *     "resource_id": string,
 *     "business_process"?: {
 *       "code": string,
 *       "version": number
 *     },
 *     "metadata"?: Array<{ key: string, value: string }>,
 *     "for_minor"?: boolean
 *   }
 *
 * Note: When for_minor is true, metadata must include:
 *   - "major_dataprincipal_id": Valid UUID (min 3 chars)
 *   - "relationship_with_minor": Non-empty string (e.g., "parent", "guardian")
 *
 * Response:
 *   {
 *     "success": true,
 *     "data": {
 *       "notice_id": string,
 *       "data_principal_id": string,
 *       "reference_id": string,
 *       "business_process_name": string,
 *       "business_process_code": string,
 *       "status": "pending",
 *       "selected_language": null,
 *       "resource_type": "grant_notice",
 *       "inserted_at": string,
 *       "updated_at": string,
 *       "link_details": {
 *         "link": string,
 *         "embed_link": string,
 *         "expires_at": string
 *       },
 *       "for_minor": boolean
 *     }
 *   }
 */
export async function POST(request: NextRequest) {
  try {
    // Get authenticated API context from middleware
    const context = getApiContext(request);

    // Parse request body
    const body = await request.json();

    // Validate request body
    let validatedData: CreateGrantNoticeApiData;
    try {
      validatedData = createGrantNoticeApiSchema.parse(body);
    } catch (error: any) {
      return ApiErrors.validationError(
        "Invalid request body",
        error.errors || error.message,
      );
    }

    let businessProcess = validatedData.resource_id
      ? await findPublishedBusinessProcessByResourceId(
          validatedData.resource_id,
        )
      : null;

    if (!businessProcess && validatedData.business_process) {
      businessProcess = await findBusinessProcessByCodeAndVersion(
        validatedData.business_process.code,
        validatedData.business_process.version,
      );
    }

    if (!businessProcess && validatedData.resource_id) {
      return ApiErrors.notFound(
        `No published process found for resource '${validatedData.resource_id}'`,
      );
    }

    if (!businessProcess) {
      return ApiErrors.validationError(
        "Either resource_id or business_process is required",
      );
    }

    // Check if business process is published
    if (businessProcess.status !== "published") {
      return ApiErrors.validationError("Process is not published", {
        status: businessProcess.status,
      });
    }

    // Calculate link expiry date from hours
    const linkExpiresAt = new Date(
      Date.now() +
        validatedData.notice_settings.expires_in_hours * 60 * 60 * 1000,
    );

    // Store consent duration canonically in minutes.
    const consentDurationInMinutes =
      validatedData.consent_settings.expires_in_hours !== undefined
        ? validatedData.consent_settings.expires_in_hours * 60
        : null;

    // Prepare notice config
    const noticeConfig = {
      viewMode: validatedData.notice_settings.view_mode,
      attributesDefaultSelection: "mandatory", // Default value
    };

    // Create the notice
    const notice = await createNoticeRecord({
      referenceId: validatedData.reference_id,
      dataPrincipalId: validatedData.data_principal_id,
      businessProcessId: businessProcess.id,
      linkExpiresAt,
      consentDuration: consentDurationInMinutes,
      noticeConfig,
      redirectionUrl: validatedData.notice_settings.redirection_url || null,
      defaultLanguage: validatedData.notice_settings.default_language,
      creationMethod: "api",
      createdByUserId: context.user.id,
      forMinor: validatedData.for_minor || false,
    });

    const metadata = [...(validatedData.metadata || [])];
    if (
      validatedData.resource_id &&
      !metadata.some((item) => item.key === NOTICE_METADATA_KEYS.RESOURCE_ID)
    ) {
      metadata.push({
        key: NOTICE_METADATA_KEYS.RESOURCE_ID,
        value: validatedData.resource_id,
      });
    }

    // Create metadata if provided
    if (metadata.length > 0) {
      await createNoticeMetadata(notice.id, metadata);
    }

    // Generate notice links
    const link = await generateNoticeLinkFromObject(notice, false);
    const embedLink = await generateNoticeLinkFromObject(notice, true);

    // Trigger NOTICE_CREATED webhook (fire-and-forget)
    triggerWebhookEvent(WebhookEventType.NOTICE_CREATED, {
      notice_id: notice.publicId,
      data_principal_id: notice.dataPrincipalId,
      reference_id: notice.referenceId,
      resource_id: validatedData.resource_id || null,
      business_process_code: notice.businessProcess.code,
      business_process_name: notice.businessProcess.name,
      business_process_version: businessProcess.version,
      status: notice.status,
      resource_type: getNoticeResourceType("grant"),
      inserted_at: notice.createdAt.toISOString(),
      updated_at: notice.updatedAt.toISOString(),
      link_expires_at: linkExpiresAt.toISOString(),
    }).catch((webhookError) => {
      console.error("Failed to trigger NOTICE_CREATED webhook:", webhookError);
    });

    // Format response to match OpenAPI spec
    const response = {
      notice_id: notice.publicId,
      data_principal_id: notice.dataPrincipalId,
      reference_id: notice.referenceId,
      resource_id: validatedData.resource_id || null,
      business_process_name: notice.businessProcess.name,
      business_process_code: notice.businessProcess.code,
      status: notice.status,
      selected_language: null,
      resource_type: getNoticeResourceType("grant"),
      inserted_at: notice.createdAt.toISOString(),
      updated_at: notice.updatedAt.toISOString(),
      link_details: {
        link: link,
        embed_link: embedLink,
        expires_at: linkExpiresAt.toISOString(),
      },
      for_minor: notice.forMinor,
    };

    return createSuccessResponse(response, {
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    // Log unexpected errors
    console.error("Error creating grant notice via API:", error);

    // Return generic error
    return ApiErrors.internalError("Failed to create grant notice");
  }
}
