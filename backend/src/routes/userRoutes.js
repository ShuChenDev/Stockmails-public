//Subscribe, See Subscribed, Change Subscription, Unsubscript


import express from "express";

import user from "../db/user.js"

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email, services } = req.body;
    if (!email || !services) {
      return res.status(400).json({ success: false, message: "Email and services are required" });
    }

    await user.subscribe(email, services);
    console.log(`${email} subscribed to ${services}`);

    res.status(201).json({ success: true, message: "Subscribed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Subscription failed" });
  }
})

router.get('/', async (req, res) => {
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

router.delete('/', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: "Email and services are required" });
    }

    await user.unsubscribe(email);
    console.log(`${email} unsubscribed`);

    res.status(200).json({ success: true, message: "Unsubscribed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Unubscribe failed" });
  }
})

export default router;