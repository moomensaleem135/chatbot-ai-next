import React from "react";
import { ChatProvider } from "./context/ChatContext";
import { ChatModule } from "./modules";

const App: React.FC = () => {
  return (
    <ChatProvider>
      <div className="app">
        <ChatModule />
      </div>
    </ChatProvider>
  );
};

export default App;
