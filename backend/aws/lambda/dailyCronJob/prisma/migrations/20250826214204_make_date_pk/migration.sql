-- AlterTable
ALTER TABLE "public"."Newspaper" ADD CONSTRAINT "Newspaper_pkey" PRIMARY KEY ("date");

-- DropIndex
DROP INDEX "public"."Newspaper_date_key";
