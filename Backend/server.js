import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import predictRoute from "./routes/predict.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", predictRoute);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

// DB connection
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
