import { useEffect } from "react";

import { useChat } from "@/context/ChatContext";

export const useChatEffects = () => {
  const {
    createNewChat,
    setInput,
    initialMessage,
    setInitialMessage,
    currentChatId,
    setMessages,
  } = useChat();

  useEffect(() => {
    if (initialMessage) {
      createNewChat();
      setInput(initialMessage);
      setInitialMessage("");
    }
  }, [initialMessage]);

  useEffect(() => {
    if (!currentChatId) return;
    const savedMessages = JSON.parse(
      localStorage.getItem(currentChatId) || "[]"
    );
    setMessages(savedMessages);
  }, [currentChatId]);
};
