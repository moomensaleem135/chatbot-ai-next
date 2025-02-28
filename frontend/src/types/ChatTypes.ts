export enum MessageSender {
  USER = "user",
  AI = "ai",
}

export interface Message {
  text: string;
  sender: MessageSender;
}

export interface ChatContextType {
  chatHistory: Array<{ id: string; title: string; date: string }>;
  setChatHistory: React.Dispatch<
    React.SetStateAction<Array<{ id: string; title: string; date: string }>>
  >;
  currentChatId: string | null;
  setCurrentChatId: React.Dispatch<React.SetStateAction<string | null>>;
  initialMessage: string;
  setInitialMessage: React.Dispatch<React.SetStateAction<string>>;
  createNewChat: () => void;
  messages: any[];
  setMessages: React.Dispatch<React.SetStateAction<any[]>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  error: any;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<any>>;
}

export interface AIAssistant {
  id: string;
  title: string;
  description: string;
  onClick?: () => void;
}
