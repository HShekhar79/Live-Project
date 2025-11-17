// src/routes/predict.js
import express from "express";
import axios from "axios";
const router = express.Router();

router.post("/predict", async (req, res) => {
  try {
    // forward the incoming JSON to Python service
    const pythonResp = await axios.post("http://python-service:5000/predict", req.body, {
      headers: { "Content-Type": "application/json" }
    });

    // optionally transform the response or add auth checks etc.
    return res.json(pythonResp.data);
  } catch (err) {
    console.error("Predict error:", err?.response?.data || err.message);
    return res.status(500).json({ error: "Prediction failed" });
  }
});

export default router;
