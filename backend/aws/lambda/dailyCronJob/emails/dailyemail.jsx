import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Tailwind,
  Link,
} from "@react-email/components";
import * as React from "react";

export const dailyemail = ({ newspaper, services, email }) => {

  const sectors = [
    {
      sector: "Energy 🛢️",
      key: "energy"
    },
    {
      sector: "Materials ⛏️",
      key: "materials"
    },
    {
      sector: "Industrials 🏭",
      key: "industrial"
    },
    {
      sector: "Consumer Discretionary 🍉",
      key: "discretionary"
    },
    {
      sector: "Consumer Staples 🍞",
      key: "staples"
    },
    {
      sector: "Health Care 🧑‍⚕️",
      key: "health"
    },
    {
      sector: "Financials 💹",
      key: "financials"
    },
    {
      sector: "Information Technology 🧑‍💻",
      key: "it"
    },
    {
      sector: "Communication Services 📞",
      key: "communication"
    },
    {
      sector: "Utilities ⚡",
      key: "utility"
    },
    {
      sector: "Real Estate 🏠",
      key: "realEstate"
    },
  ]

  const macros = [
    {
      section: "Monetary Policy 🏦",
      hint: "Central bank actions, rate decisions, QE/QT, Fed, ECB, BOJ.",
      key: "monetary",
    },
    {
      section: "Fiscal Policy 💸",
      hint: "Government spending, taxation, budgetary policy, debt issuance, Congress, Treasury, or EU governments.",
      key: "fiscal",
    },
    {
      section: "Inflation & Growth 📈",
      hint: "CPI, PPI, GDP, Unemployment, Labor Participation.",
      key: "inflation",
    },
    {
      section: "Trade & Global Macro 🛒",
      hint: "International Trade, Commodity, Supply Chain, Tariffs, Global Demand",
      key: "trade",
    },
    {
      section: "Geopolitics 🌏",
      hint: "Elections, Wars, Sanctions, Regulation, Geopolitical Tension.",
      key: "geopolitics",
    },
  ]

  const tickers = [
    {
      ticker: "S&P 500",
      hint: "SPDR S&P 500 Trust 🥸",
      key: "sp500",
    },
    {
      ticker: "Nasdaq 100",
      hint: "Invesco QQQ Trust 👓",
      key: "qqq",
    },
    {
      ticker: "Dow Jones Industrial..",
      hint: "Dow Jones Industrial Average Index 👴",
      key: "dji",
    },
    {
      ticker: "AAPL",
      hint: "Apple 🍎",
      key: "aapl",
    },
    {
      ticker: "TSLA",
      hint: "Tesla 🚗",
      key: "tsla",
    },
    {
      ticker: "Bitcoin",
      hint: "Bitcoin 🪙",
      key: "btc",
    },
  ]

  const sectorMap = {};

  macros.forEach((item) => {
    sectorMap[item.key] = item.section;
  })
  sectors.forEach((item) => {
    sectorMap[item.key] = item.sector;
  })
  tickers.forEach((item) => {
    sectorMap[item.key] = item.hint;
  })

  const subscribed = Array.isArray(services)
    ? services
    : typeof services === "string"
      ? services.split("&").map((s) => s.trim())
      : [];

  return (
    <Html>
      <Head />
      <Preview>📈 Your Stockmails Daily Brief</Preview>

      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          <Container className="bg-white rounded-lg shadow p-6 max-w-xl mx-auto">

            <Heading className="text-2xl mb-4 text-black">
              Stockmails Daily Brief
            </Heading>
            <Text className="text-gray-600 mb-6">
              Here’s your Stockmails daily morning brief for today.
            </Text>


            {subscribed.length === 0 && (
              <Text className="text-gray-500 italic">
                You have no active subscriptions.
              </Text>
            )}

            {subscribed.map((sector) => {
              const key = sector.toLowerCase() + "Response";
              const summary = newspaper?.[key];
              if (!summary) return null;

              const displayName = sectorMap[sector] || sector;

              return (
                <Section key={sector} className="mb-6 border-b pb-4">
                  <Heading as="h3" className="text-lg mb-2">
                    {displayName}
                  </Heading>
                  <Text className="text-gray-700">{summary}</Text>
                </Section>
              );
            })}

            <Section className="mt-8 pt-4 border-t">
              <Text className="text-xs text-gray-400 text-center">
                You are receiving this email because you subscribed to Stockmails Daily Brief.{" "}
                <Link
                  href={`https://stockmails-server.vercel.app/unsubscribe${email ? `?email=${encodeURIComponent(email)}` : ""}`}
                  className="underline text-gray-500"
                >
                  Unsubscribe
                </Link>
              </Text>
            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
