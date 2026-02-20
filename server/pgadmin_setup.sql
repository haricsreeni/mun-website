-- ============================================
-- IITM MUN 2026 — PostgreSQL Database Setup
-- Run this script in pgAdmin Query Tool
-- ============================================

-- 1. Create the database (run this in the default 'postgres' database)
-- CREATE DATABASE iitm_mun;

-- 2. Connect to iitm_mun database, then run the below:

-- Create ENUM types
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'enum_registrations_delegationtype') THEN
        CREATE TYPE "enum_registrations_delegationType" AS ENUM ('individual', 'institution');
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'enum_registrations_committee') THEN
        CREATE TYPE "enum_registrations_committee" AS ENUM ('unsc', 'disec', 'unhrc', 'crisis');
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'enum_registrations_experience') THEN
        CREATE TYPE "enum_registrations_experience" AS ENUM ('yes', 'no');
    END IF;

    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'enum_registrations_accommodation') THEN
        CREATE TYPE "enum_registrations_accommodation" AS ENUM ('yes', 'no');
    END IF;
END
$$;

-- Create the registrations table
CREATE TABLE IF NOT EXISTS registrations (
    id              SERIAL PRIMARY KEY,
    "fullName"      VARCHAR(255) NOT NULL,
    email           VARCHAR(255) NOT NULL,
    phone           VARCHAR(255) NOT NULL,
    institution     VARCHAR(255) NOT NULL,
    "delegationType" "enum_registrations_delegationType" NOT NULL,
    committee       "enum_registrations_committee" NOT NULL,
    "delegatesCount" INTEGER DEFAULT NULL,
    experience      "enum_registrations_experience" DEFAULT NULL,
    accommodation   "enum_registrations_accommodation" DEFAULT NULL,
    message         TEXT DEFAULT '',
    "createdAt"     TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- ============================================
-- Useful queries for pgAdmin
-- ============================================

-- View all registrations (newest first)
-- SELECT * FROM registrations ORDER BY "createdAt" DESC;

-- Count total registrations
-- SELECT COUNT(*) AS total FROM registrations;

-- Count by committee
-- SELECT committee, COUNT(*) AS count FROM registrations GROUP BY committee;

-- Count by delegation type
-- SELECT "delegationType", COUNT(*) AS count FROM registrations GROUP BY "delegationType";

-- Delete a registration by ID
-- DELETE FROM registrations WHERE id = <id>;

-- Drop everything (DANGER!)
-- DROP TABLE IF EXISTS registrations;
-- DROP TYPE IF EXISTS "enum_registrations_delegationType";
-- DROP TYPE IF EXISTS "enum_registrations_committee";
-- DROP TYPE IF EXISTS "enum_registrations_experience";
-- DROP TYPE IF EXISTS "enum_registrations_accommodation";
