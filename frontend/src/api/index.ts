import { API_BASE_URL } from "@/configs/constants";

export const fetchChatResponse = async (prompt: string): Promise<any> => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    return { error: "Failed to fetch response" };
  }
};
