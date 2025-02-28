import { fetchChatResponse } from "@/api";
import { useChat } from "@/context/ChatContext";

export const useChatLogic = () => {
  const {
    setInput,
    setMessages,
    currentChatId,
    input,
    error,
    messages,
    setError,
    setLoading,
  } = useChat();

  const sendMessage = async () => {
    if (!input.trim() && !error) return;

    let refreshMessages,
      currentMessages = messages;

    if (error) {
      refreshMessages = messages[messages.length - 2]?.text || "";
      currentMessages = messages.slice(0, -2);
    }

    const newMessages = [
      ...currentMessages,
      { text: error ? refreshMessages : input, sender: "user" },
    ];

    setLoading(true);
    setError(null);

    try {
      const aiResponse = await fetchChatResponse(
        error ? refreshMessages : input
      );

      if (aiResponse.error) {
        setError(aiResponse.error);
        return;
      }

      const updatedMessages = [
        ...newMessages,
        { text: aiResponse.text, sender: "ai" },
      ];

      setMessages(updatedMessages);
      setInput("");

      if (currentChatId) {
        localStorage.setItem(currentChatId, JSON.stringify(updatedMessages));
      }
    } catch (err) {
      console.error("Message sending failed:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { input, setInput, error, messages, sendMessage };
};
