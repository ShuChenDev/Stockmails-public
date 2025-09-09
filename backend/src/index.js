// import dotenv from "dotenv";
// dotenv.config();

import express from "express";
import user from "./db/user.js"

const app = express();
app.use(express.json());

app.post('/api/', async (req, res) => {
  try {
    const { email, services } = req.body;
    if (!email || !services) {
      return res.status(400).json({ success: false, message: "Email and services are required" });
    }

    await user.subscribe(email, services);
    console.log(`${email} subscribed to ${services}`);

    const lambdaRes = await fetch("https://jqbh0io191.execute-api.us-east-1.amazonaws.com/default/stockmails-lambda", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const lambdaData = await lambdaRes.json();
    console.log("Lambda response:", lambdaData);

    res.status(201).json({ success: true, message: "Subscribed successfully" });
  } catch (err) {
    console.error(err);
    res.status(201).json({ success: true, message: "Subscribed successfully" });
  }
})

app.get('/api/', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: "Email and services are required" });
    }

    services = await user.getSubscribe(email);
    console.log(`${email} has ${services} services`);

    res.status(201).json({ success: true, message: "Get Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Get Failed" });
  }
})

app.get('/unsubscribe', async (req, res) => {
  try {
    const { email } = req.query; // ✅ use query, not body
    if (!email) {
      return res.status(400).send("Email is required.");
    }

    await user.unsubscribe(email);
    console.log(`${email} unsubscribed`);

    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Unsubscribe</title>
          <meta http-equiv="refresh" content="3;url=https://stockmails.com" /> 
          <style>
            body { font-family: sans-serif; background: #f9fafb; text-align: center; padding: 50px; }
            h2 { color: #16a34a; }
            p { color: #4b5563; }
          </style>
        </head>
        <body>
          <h2>You have unsubscribed from Stockmails ✅</h2>
          <p>Redirecting you to Stockmails in 3 seconds...</p>
        </body>
      </html>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send("Unsubscribe failed. Please try again later.");
  }
});

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Stockmails backend is running" });
});

// app.listen("8000", () => {
//   console.log(`Example app listening on port 8000`)
// })
export default app