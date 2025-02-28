import { openai } from "../config/openAi";
import { ERROR_MESSAGES } from "../constants/errorMessages";
import { ChatRequest } from "../interfaces";

class ChatService {
  async getResponse({
    prompt,
    model = "gpt-4",
    temperature = 0.7,
    stream = false,
  }: ChatRequest): Promise<any> {
    try {
      const completion = await openai.chat.completions.create({
        model,
        messages: [{ role: "user", content: prompt }],
        temperature,
        stream,
      });

      return completion;
    } catch (error: any) {
      const message = `${ERROR_MESSAGES.OPENAI_ERROR}: ${error.message}`;
      throw new Error(message);
    }
  }
}

export default ChatService;
