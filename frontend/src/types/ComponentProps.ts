import { AIAssistant, MessageSender } from "./ChatTypes";

export interface SidebarProps {
  items: string[];
  onSelect: (item: string) => void;
}

export interface MessageProps {
  text: string;
  sender: "user" | "ai";
}

export interface MarkdownCustomProps {
  content: string;
}

export interface ChatInterfaceProps {
  messages: { text: string; sender: MessageSender }[];
}

export interface AIAssistantCardProps {
  assistant: AIAssistant;
  onClick: (assistant: AIAssistant) => void;
}
