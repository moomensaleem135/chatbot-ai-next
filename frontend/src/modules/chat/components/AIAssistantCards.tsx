import React from "react";
import { AIAssistantCard } from "@/components";
import { useChat } from "@/context/ChatContext";
import { AIAssistant } from "@/types/ChatTypes";

const assistants: AIAssistant[] = [
  {
    id: "1",
    title: "PRO Assistant",
    description: "A specialized AI agent for helping with PHP generation.",
  },
  {
    id: "2",
    title: "Legal Policy GPT",
    description:
      "An AI agent to assist with legal topics such as policy template creation.",
  },
  {
    id: "3",
    title: "General Chat",
    description: "An AI assistant for your everyday tasks.",
  },
  {
    id: "4",
    title: "Research Assistant",
    description: "An AI agent to assist with research topics.",
  },
];

const AIAssistantCards: React.FC = () => {
  const { setInitialMessage } = useChat();

  const startNewChat = (assistant: AIAssistant) => {
    setInitialMessage(`Starting chat with ${assistant.title}`);
  };

  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {assistants.map((assistant) => (
        <AIAssistantCard
          key={assistant.id}
          onClick={startNewChat}
          assistant={assistant}
        />
      ))}
    </div>
  );
};

export default AIAssistantCards;
