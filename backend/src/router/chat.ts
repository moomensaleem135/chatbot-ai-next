import express from "express";
import { chatWithAi, getChatHistory } from "../controllers/chat";

export default (router: express.Router) => {
  router.get("/history", getChatHistory);
  router.post("/chat", chatWithAi);
};
