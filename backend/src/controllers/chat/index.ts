import { Request, Response } from "express";

import ChatService from "../../services/chatService";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
import { StatusCodes } from "../../enum/StatusCodes";
import { validate } from "../../middlewares/validate";
import { validatePrompt } from "../../validations/chatPrompt";

const chatService = new ChatService();

export const chatWithAi = [
  validate(validatePrompt()),
  async (req: Request, res: Response): Promise<Response | void> => {
    const { prompt } = req.body;

    if (!prompt) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: ERROR_MESSAGES.PROMPT_REQUIRED });
    }

    try {
      const response = await chatService.getResponse({ prompt });

      if (response?.choices?.[0]?.message?.content) {
        return res
          .status(StatusCodes.OK)
          .json({ text: response.choices[0].message.content });
      } else {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: ERROR_MESSAGES.INVALID_AI_RESPONSE });
      }
    } catch (error: any) {
      console.log("Controller Error:", error.message);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: ERROR_MESSAGES.ERROR_GENERATING_AI_RESPONSE,
        details: error.message,
      });
    }
  },
];

export const getChatHistory = (req: Request, res: Response) => {
  const dummyHistory = [
    {
      id: 1,
      message: "Hello, how can I help you?",
      timestamp: "2024-02-28T10:00:00Z",
    },
    {
      id: 2,
      message: "Can you provide more details?",
      timestamp: "2024-02-28T10:05:00Z",
    },
    {
      id: 3,
      message: "Sure, here’s what I found.",
      timestamp: "2024-02-28T10:10:00Z",
    },
  ];

  res.json({ success: true, history: dummyHistory });
};
