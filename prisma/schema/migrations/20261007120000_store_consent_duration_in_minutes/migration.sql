-- Store consent_duration canonically in minutes instead of hours.
UPDATE "notices"
SET "consent_duration" = "consent_duration" * 60
WHERE "consent_duration" IS NOT NULL;

UPDATE "consents"
SET "consent_duration" = "consent_duration" * 60
WHERE "consent_duration" IS NOT NULL;

UPDATE "business_processes_to_consent_purposes"
SET "consent_duration" = "consent_duration" * 60
WHERE "consent_duration" IS NOT NULL;
