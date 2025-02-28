import React from "react";

import AppLayout from "@/layout/AppLayout";
import AIAssistantCards from "@/modules/chat/components/AIAssistantCards";

import ChatInterface from "./components/ChatInterface";

const ChatModule: React.FC = () => {
  return (
    <AppLayout>
      <AIAssistantCards />
      <ChatInterface />
    </AppLayout>
  );
};

export default ChatModule;
