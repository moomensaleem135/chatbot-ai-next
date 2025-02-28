import express, { Express } from "express";
import router from "./router";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Routes
app.use("/api", router());

// Start server
app.listen(process.env.PORT, () => {
  const host = process.env.HOST || "localhost";
  const port = process.env.PORT;
  console.log(`Server is running on http://${host}:${port}`);
});
