import { NextRequest } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { ApiErrors } from "@/lib/api-errors";
import { createSuccessResponse } from "@/lib/api-response";
import { getApiContext } from "@/lib/api-auth-middleware";

const requestSchema = z.object({
  resource_id: z.uuid(),
  reference_id: z.string().min(1).max(255),
});

type ConsentActionRow = {
  id: number;
  public_id: string;
  request_id: string;
  request_type: string;
  reference_id: string;
  data_principal_id: string;
  business_process_id: string;
  consent_purpose_id: string;
  processing_purpose_id: string;
  business_process_rule_id: string;
  business_unit_id: string;
  user_attribute_names: string[];
  major_data_principal_id: string | null;
  parent_consent_id: string | null;
  language: string;
  inserted_at: Date;
  updated_at: Date;
  status: string;
  expires_at: Date | null;
  is_expired: boolean;
  data_retention_action_triggered_at: Date | null;
  consent_duration: number | null;
  user_attribute_action: string | null;
  resource_id: string | null;
};

function parseAttributeActions(raw: string | null) {
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function POST(request: NextRequest) {
  try {
    getApiContext(request);
    const body = requestSchema.parse(await request.json());

    console.info("CONSENT_ATTRIBUTE_ACTION_LOOKUP", {
      resource_id: body.resource_id,
      reference_id: body.reference_id,
      is_expired: false,
      source_column: "user_attribute_action",
    });

    const rows = await prisma.$queryRaw<ConsentActionRow[]>`
      SELECT
        id,
        public_id,
        request_id,
        request_type,
        reference_id,
        data_principal_id,
        business_process_id,
        consent_purpose_id,
        processing_purpose_id,
        business_process_rule_id,
        business_unit_id,
        user_attribute_names,
        major_data_principal_id,
        parent_consent_id,
        "language",
        inserted_at,
        updated_at,
        status,
        expires_at,
        is_expired,
        data_retention_action_triggered_at,
        consent_duration,
        user_attribute_action,
        resource_id
      FROM public.consents
      WHERE status = 'accepted'
        AND is_expired = false
        AND (expires_at IS NULL OR expires_at > NOW())
        AND resource_id = ${body.resource_id}::uuid
        AND (
          reference_id = ${body.reference_id}
          OR data_principal_id = ${body.reference_id}
        )
      ORDER BY inserted_at DESC
    `;

    console.info("CONSENT_ATTRIBUTE_ACTION_LOOKUP_RESULT", {
      count: rows.length,
      resource_id: body.resource_id,
      reference_id: body.reference_id,
      action_rows: rows.map((row) => ({
        consent_id: row.public_id,
        user_attribute_action: row.user_attribute_action,
      })),
    });

    return createSuccessResponse({
      consents: rows.map((row) => ({
        id: row.id,
        consent_id: row.public_id,
        request_id: row.request_id,
        request_type: row.request_type,
        reference_id: row.reference_id,
        data_principal_id: row.data_principal_id,
        business_process_id: row.business_process_id,
        consent_purpose_id: row.consent_purpose_id,
        processing_purpose_id: row.processing_purpose_id,
        business_process_rule_id: row.business_process_rule_id,
        business_unit_id: row.business_unit_id,
        user_attribute_names: row.user_attribute_names,
        user_attribute_action: row.user_attribute_action,
        attribute_actions: parseAttributeActions(row.user_attribute_action),
        resource_id: row.resource_id,
        language: row.language,
        status: row.status,
        inserted_at: row.inserted_at.toISOString(),
        updated_at: row.updated_at.toISOString(),
        expires_at: row.expires_at?.toISOString() ?? null,
        is_expired: row.is_expired,
        consent_duration: row.consent_duration,
        major_data_principal_id: row.major_data_principal_id,
        parent_consent_id: row.parent_consent_id,
        data_retention_action_triggered_at:
          row.data_retention_action_triggered_at?.toISOString() ?? null,
      })),
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return ApiErrors.validationError("Invalid consent action request", error.issues);
    }

    console.error("Error fetching consent attribute actions:", error);
    return ApiErrors.internalError("Failed to fetch consent attribute actions");
  }
}
