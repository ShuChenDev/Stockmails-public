import { jsx, jsxs } from "react/jsx-runtime";
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
  Link
} from "@react-email/components";
import * as React from "react";
const dailyemail = ({ newspaper, services, email }) => {
  const sectors = [
    {
      sector: "Energy \u{1F6E2}\uFE0F",
      key: "energy"
    },
    {
      sector: "Materials \u26CF\uFE0F",
      key: "materials"
    },
    {
      sector: "Industrials \u{1F3ED}",
      key: "industrial"
    },
    {
      sector: "Consumer Discretionary \u{1F349}",
      key: "discretionary"
    },
    {
      sector: "Consumer Staples \u{1F35E}",
      key: "staples"
    },
    {
      sector: "Health Care \u{1F9D1}\u200D\u2695\uFE0F",
      key: "health"
    },
    {
      sector: "Financials \u{1F4B9}",
      key: "financials"
    },
    {
      sector: "Information Technology \u{1F9D1}\u200D\u{1F4BB}",
      key: "it"
    },
    {
      sector: "Communication Services \u{1F4DE}",
      key: "communication"
    },
    {
      sector: "Utilities \u26A1",
      key: "utility"
    },
    {
      sector: "Real Estate \u{1F3E0}",
      key: "realEstate"
    }
  ];
  const macros = [
    {
      section: "Monetary Policy \u{1F3E6}",
      hint: "Central bank actions, rate decisions, QE/QT, Fed, ECB, BOJ.",
      key: "monetary"
    },
    {
      section: "Fiscal Policy \u{1F4B8}",
      hint: "Government spending, taxation, budgetary policy, debt issuance, Congress, Treasury, or EU governments.",
      key: "fiscal"
    },
    {
      section: "Inflation & Growth \u{1F4C8}",
      hint: "CPI, PPI, GDP, Unemployment, Labor Participation.",
      key: "inflation"
    },
    {
      section: "Trade & Global Macro \u{1F6D2}",
      hint: "International Trade, Commodity, Supply Chain, Tariffs, Global Demand",
      key: "trade"
    },
    {
      section: "Geopolitics \u{1F30F}",
      hint: "Elections, Wars, Sanctions, Regulation, Geopolitical Tension.",
      key: "geopolitics"
    }
  ];
  const tickers = [
    {
      ticker: "S&P 500",
      hint: "SPDR S&P 500 Trust \u{1F978}",
      key: "sp500"
    },
    {
      ticker: "Nasdaq 100",
      hint: "Invesco QQQ Trust \u{1F453}",
      key: "qqq"
    },
    {
      ticker: "Dow Jones Industrial..",
      hint: "Dow Jones Industrial Average Index \u{1F474}",
      key: "dji"
    },
    {
      ticker: "AAPL",
      hint: "Apple \u{1F34E}",
      key: "aapl"
    },
    {
      ticker: "TSLA",
      hint: "Tesla \u{1F697}",
      key: "tsla"
    },
    {
      ticker: "Bitcoin",
      hint: "Bitcoin \u{1FA99}",
      key: "btc"
    }
  ];
  const sectorMap = {};
  macros.forEach((item) => {
    sectorMap[item.key] = item.section;
  });
  sectors.forEach((item) => {
    sectorMap[item.key] = item.sector;
  });
  tickers.forEach((item) => {
    sectorMap[item.key] = item.hint;
  });
  const subscribed = Array.isArray(services) ? services : typeof services === "string" ? services.split("&").map((s) => s.trim()) : [];
  return /* @__PURE__ */ jsxs(Html, { children: [
    /* @__PURE__ */ jsx(Head, {}),
    /* @__PURE__ */ jsx(Preview, { children: "\u{1F4C8} Your Stockmails Daily Brief" }),
    /* @__PURE__ */ jsx(Tailwind, { children: /* @__PURE__ */ jsx(Body, { className: "bg-gray-50 font-sans", children: /* @__PURE__ */ jsxs(Container, { className: "bg-white rounded-lg shadow p-6 max-w-xl mx-auto", children: [
      /* @__PURE__ */ jsx(Heading, { className: "text-2xl mb-4 text-black", children: "Stockmails Daily Brief" }),
      /* @__PURE__ */ jsx(Text, { className: "text-gray-600 mb-6", children: "Here\u2019s your Stockmails daily morning brief for today." }),
      subscribed.length === 0 && /* @__PURE__ */ jsx(Text, { className: "text-gray-500 italic", children: "You have no active subscriptions." }),
      subscribed.map((sector) => {
        const key = sector.toLowerCase() + "Response";
        const summary = newspaper?.[key];
        if (!summary) return null;
        const displayName = sectorMap[sector] || sector;
        return /* @__PURE__ */ jsxs(Section, { className: "mb-6 border-b pb-4", children: [
          /* @__PURE__ */ jsx(Heading, { as: "h3", className: "text-lg mb-2", children: displayName }),
          /* @__PURE__ */ jsx(Text, { className: "text-gray-700", children: summary })
        ] }, sector);
      }),
      /* @__PURE__ */ jsx(Section, { className: "mt-8 pt-4 border-t", children: /* @__PURE__ */ jsxs(Text, { className: "text-xs text-gray-400 text-center", children: [
        "You are receiving this email because you subscribed to Stockmails Daily Brief.",
        " ",
        /* @__PURE__ */ jsx(
          Link,
          {
            href: `https://stockmails-server.vercel.app/unsubscribe${email ? `?email=${encodeURIComponent(email)}` : ""}`,
            className: "underline text-gray-500",
            children: "Unsubscribe"
          }
        )
      ] }) })
    ] }) }) })
  ] });
};
export {
  dailyemail
};
