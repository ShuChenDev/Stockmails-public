/*
  Warnings:

  - You are about to drop the `Newspaper` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subscription` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."Newspaper";

-- DropTable
DROP TABLE "public"."Subscription";

-- CreateTable
CREATE TABLE "public"."subscription" (
    "email" TEXT NOT NULL,
    "services" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subscription_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "public"."newspaper" (
    "date" TIMESTAMP(3) NOT NULL,
    "monetaryPrompt" TEXT,
    "fiscalPrompt" TEXT,
    "inflationPrompt" TEXT,
    "tradePrompt" TEXT,
    "geopoliticsPrompt" TEXT,
    "energyPrompt" TEXT,
    "discretionaryPrompt" TEXT,
    "financialsPrompt" TEXT,
    "utilityPrompt" TEXT,
    "materialsPrompt" TEXT,
    "staplesPrompt" TEXT,
    "itPrompt" TEXT,
    "realEstatePrompt" TEXT,
    "industrialPrompt" TEXT,
    "healthPrompt" TEXT,
    "communicationPrompt" TEXT,
    "sp500Prompt" TEXT,
    "qqqPrompt" TEXT,
    "djiPrompt" TEXT,
    "aaplPrompt" TEXT,
    "tslaPrompt" TEXT,
    "btcPrompt" TEXT,
    "monetaryResponse" TEXT,
    "fiscalResponse" TEXT,
    "inflationResponse" TEXT,
    "tradeResponse" TEXT,
    "geopoliticsResponse" TEXT,
    "energyResponse" TEXT,
    "discretionaryResponse" TEXT,
    "financialsResponse" TEXT,
    "utilityResponse" TEXT,
    "materialsResponse" TEXT,
    "staplesResponse" TEXT,
    "itResponse" TEXT,
    "realEstateResponse" TEXT,
    "industrialResponse" TEXT,
    "healthResponse" TEXT,
    "communicationResponse" TEXT,
    "sp500Response" TEXT,
    "qqqResponse" TEXT,
    "djiResponse" TEXT,
    "aaplResponse" TEXT,
    "tslaResponse" TEXT,
    "btcResponse" TEXT,

    CONSTRAINT "newspaper_pkey" PRIMARY KEY ("date")
);
