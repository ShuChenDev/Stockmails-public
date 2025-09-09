-- CreateTable
CREATE TABLE "public"."Subscription" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "services" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Newspaper" (
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
    "btcResponse" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_email_key" ON "public"."Subscription"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Newspaper_date_key" ON "public"."Newspaper"("date");
