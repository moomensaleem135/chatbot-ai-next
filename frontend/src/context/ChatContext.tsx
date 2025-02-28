import React, { createContext, useState, ReactNode, useContext } from "react";
import { ChatContextType } from "../types/ChatTypes";

export const ChatContext = createContext<ChatContextType | undefined>(
  undefined
);

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [chatHistory, setChatHistory] = useState<
    Array<{ id: string; title: string; date: string }>
  >(() => {
    return JSON.parse(localStorage.getItem("chatHistory") || "[]");
  });
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [initialMessage, setInitialMessage] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState<string>(initialMessage || "");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const createNewChat = () => {
    const newChatId = `chat-${Date.now()}`;
    const newChat = {
      id: newChatId,
      title: "New Chat",
      date: new Date().toLocaleDateString(),
    };
    const updatedHistory = [...chatHistory, newChat];
    setChatHistory(updatedHistory);
    localStorage.setItem("chatHistory", JSON.stringify(updatedHistory));
    setCurrentChatId(newChatId);
  };

  return (
    <ChatContext.Provider
      value={{
        chatHistory,
        setChatHistory,
        currentChatId,
        setCurrentChatId,
        initialMessage,
        setInitialMessage,
        createNewChat,
        messages,
        setMessages,
        input,
        setInput,
        loading,
        error,
        setLoading,
        setError,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};
