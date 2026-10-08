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

import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import {
  UserAttributeFormSchema,
  UserAttributeUpdateData,
} from "@/lib/schemas/user-attribute-schemas";

type UserAttributeRow = {
  id: number;
  name: string;
  pii: boolean;
  piiAction: string | null;
  supportedLanguages: string[] | null;
  translations: Prisma.JsonValue | null;
  createdAt: Date;
  updatedAt: Date;
};

function normalizeUserAttribute(row: UserAttributeRow) {
  return {
    ...row,
    piiAction: row.piiAction || "ALLOW",
    supportedLanguages: row.supportedLanguages || ["en"],
  };
}

export async function getAllUserAttributes() {
  try {
    const userAttributes = await prisma.$queryRaw<UserAttributeRow[]>`
      SELECT
        id,
        name,
        pii,
        pii_action AS "piiAction",
        supported_languages AS "supportedLanguages",
        translations,
        created_at AS "createdAt",
        updated_at AS "updatedAt"
      FROM user_attributes
      ORDER BY updated_at DESC
    `;
    return userAttributes.map(normalizeUserAttribute);
  } catch (error) {
    console.error("Error fetching user attributes:", error);
    throw new Error("Failed to fetch purpose attributes");
  }
}

export async function getUserAttributeById(id: number) {
  try {
    const [userAttribute] = await prisma.$queryRaw<UserAttributeRow[]>`
      SELECT
        id,
        name,
        pii,
        pii_action AS "piiAction",
        supported_languages AS "supportedLanguages",
        translations,
        created_at AS "createdAt",
        updated_at AS "updatedAt"
      FROM user_attributes
      WHERE id = ${id}
      LIMIT 1
    `;
    return userAttribute ? normalizeUserAttribute(userAttribute) : null;
  } catch (error) {
    console.error("Error fetching user attribute:", error);
    throw new Error("Failed to fetch purpose attribute");
  }
}

export async function createUserAttribute(
  data: UserAttributeFormSchema & { supportedLanguages?: string[] }
) {
  try {
    const [userAttribute] = await prisma.$queryRaw<UserAttributeRow[]>`
      INSERT INTO user_attributes (
        name,
        pii,
        pii_action,
        supported_languages,
        translations,
        created_at,
        updated_at
      )
      VALUES (
        ${data.name},
        ${data.pii},
        ${data.piiAction},
        ARRAY['en']::TEXT[],
        '{}'::jsonb,
        NOW(),
        NOW()
      )
      RETURNING
        id,
        name,
        pii,
        pii_action AS "piiAction",
        supported_languages AS "supportedLanguages",
        translations,
        created_at AS "createdAt",
        updated_at AS "updatedAt"
    `;
    return normalizeUserAttribute(userAttribute);
  } catch (error) {
    console.error("Error creating user attribute:", error);
    throw new Error("Failed to create purpose attribute");
  }
}

export async function updateUserAttribute(
  id: number,
  data: UserAttributeUpdateData & { supportedLanguages?: string[] }
) {
  try {
    const [userAttribute] = await prisma.$queryRaw<UserAttributeRow[]>`
      UPDATE user_attributes
      SET
        name = ${data.name},
        pii = ${data.pii},
        pii_action = ${data.piiAction},
        updated_at = NOW()
      WHERE id = ${id}
      RETURNING
        id,
        name,
        pii,
        pii_action AS "piiAction",
        supported_languages AS "supportedLanguages",
        translations,
        created_at AS "createdAt",
        updated_at AS "updatedAt"
    `;
    return userAttribute ? normalizeUserAttribute(userAttribute) : null;
  } catch (error) {
    console.error("Error updating user attribute:", error);
    throw new Error("Failed to update purpose attribute");
  }
}

export async function deleteUserAttribute(id: number) {
  try {
    await prisma.userAttribute.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error("Error deleting user attribute:", error);
    throw new Error("Failed to delete purpose attribute");
  }
}

export async function getUserAttributeByName(name: string) {
  try {
    const userAttribute = await prisma.userAttribute.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive",
        },
      },
    });
    return userAttribute;
  } catch (error) {
    console.error("Error fetching user attribute by name:", error);
    throw new Error("Failed to fetch purpose attribute");
  }
}

export async function checkUserAttributeNameExists(
  name: string,
  excludeId?: number
) {
  try {
    const userAttribute = await prisma.userAttribute.findFirst({
      where: {
        name: {
          equals: name,
          mode: "insensitive",
        },
      },
    });

    if (!userAttribute) {
      return false;
    }

    // If excludeId is provided, check if the found user attribute is different
    if (excludeId && userAttribute.id === excludeId) {
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error checking user attribute name:", error);
    throw new Error("Failed to check purpose attribute name");
  }
}
