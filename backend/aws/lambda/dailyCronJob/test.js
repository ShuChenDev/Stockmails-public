import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";
import { dailyemail } from "./emails/daily-email.js";
import dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_KEY); // safer than hardcoding

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const handler = async () => {
  try {
    // 🔹 for testing, just send to your own address
    const testUser = { email: "shu.chen.xm.work@gmail.com" };

    const { error } = await resend.emails.send({
      from: "Stockmails Daily Brief <noreply@stockmails.com>",
      to: [testUser.email],
      subject: "Your Stockmails Daily Newspaper",
      react: dailyemail({ content: "Hello, this is a React component email!" }),
    });

    if (error) {
      console.error(`❌ Email send failed for ${testUser.email}:`, error);
    } else {
      console.log(`✅ Sent to ${testUser.email}`);
    }

    // optional delay if testing multiple
    await sleep(2500);

    return { statusCode: 200, body: "Email sent successfully" };
  } catch (err) {
    console.error("Fatal error in job:", err);
    return { statusCode: 500, body: "Error running job" };
  } finally {
    await prisma.$disconnect();
  }
};

// run immediately if called directly
if (process.argv[1].includes("test.js")) {
  handler().then((res) => {
    console.log("Handler finished:", res);
    process.exit(0);
  });
}
