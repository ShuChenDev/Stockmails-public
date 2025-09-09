// import dotenv from "dotenv"
// dotenv.config();


import { PrismaClient } from "@prisma/client"
import OpenAI from "openai";

const prisma = new PrismaClient();
const gpt = new OpenAI();


const NEWSAPI_KEY = process.env.NEWSAPI_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;



async function getDailyPrompt(keyword) {

  let prompt = "";

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const start_date = yesterday.toISOString().split("T")[0];
  const end_date = today.toISOString().split("T")[0];

  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(keyword)}&from=${start_date}&to=${end_date}&language=en&sortBy=popularity&pageSize=100&apiKey=${NEWSAPI_KEY}`);
    if (!response.ok) throw Error("No response")

    const data = await response.json();

    const articles = (data.articles || []).slice(0, 100);

    if (articles.length === 0) {
      return null;
    }

    const articleContent = articles.map((article, index) => {
      const source = article.source?.name || "Unknown Source";
      return `
      Article ${index + 1}
      {title: ${article.title || "Unknown"}}
      {description: ${article.description || "Unknown"}} 
      {content: ${article.content || "Unknown"}}
      {source: ${source || "Unknown"}} 
      `;
    }).join("\n");

    prompt = `
    You are an expert financial news editor. Below is a collection of news articles for the sector "${keyword}" from today. 
    
    Please generate a concise summary (2–4 sentences) that captures the key themes and events across all articles. 
    The summary should be written in a professional, neutral tone, suitable for emailing to subscribers. 
    Do not mention article counts or sources explicitly, just summarize the news trends. 
    
    Here are the articles:
    ${articleContent}
    `;

    return prompt;
  }
  catch {
    return "Error"
  }
}

async function getAIResponse(prompt) {

  const response = await gpt.responses.create({
    model: "gpt-5-mini-2025-08-07",
    input: String(prompt)
  })

  return response.output_text;
}

async function processNewspaper(date, forceUpdate = false) {
  const fields = [
    { sector: "monetary", key: "USMonetaryPolicy" },
    { sector: "fiscal", key: "USFiscalPolicy" },
    { sector: "inflation", key: "USInflation" },
    { sector: "trade", key: "InternationalTrade" },
    { sector: "geopolitics", key: "Geopolitics" },

    { sector: "energy", key: "EnergySector" },
    { sector: "discretionary", key: "ConsumerDiscretionary" },
    { sector: "financials", key: "Financials" },
    { sector: "utility", key: "Utilities" },
    { sector: "materials", key: "Materials" },
    { sector: "staples", key: "ConsumerStaples" },
    { sector: "it", key: "InformationTechnology" },
    { sector: "realEstate", key: "RealEstate" },
    { sector: "industrial", key: "Industrials" },
    { sector: "health", key: "Healthcare" },
    { sector: "communication", key: "CommunicationServices" },

    { sector: "sp500", key: "SP500" },
    { sector: "qqq", key: "NASDAQ100" },
    { sector: "dji", key: "DowJones" },
    { sector: "aapl", key: "Apple" },
    { sector: "tsla", key: "Tesla" },
    { sector: "btc", key: "Bitcoin" },
  ];


  const day = new Date(date)

  let newspaper = await prisma.newspaper.findUnique({
    where: {
      date: new Date(date)
    },
  });

  if (newspaper && !forceUpdate) {
    console.log("Today's newspaper already exsist in db, use forceUpdate=true if you wish to update");
    return;
  }

  const content = {};

  for (const field of fields) {

    const promptField = `${field.sector}Prompt`;
    const responseField = `${field.sector}Response`;

    const prompt = await getDailyPrompt(field.key);

    if (prompt) {
      console.log(`Generating Result for ${promptField}  ${prompt}`)
      const response = await getAIResponse(prompt);
      content[promptField] = prompt;
      content[responseField] = response;
    }

  }

  await prisma.newspaper.upsert({
    where: {
      date: day
    },
    update: content,
    create: {
      date: new Date(date),
      ...content
    }
  })
  console.log("Successfuly generated newspaper")
}

export default {
  processNewspaper
}