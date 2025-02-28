import React from "react";
import { useChat } from "@/context/ChatContext";

const Sidebar: React.FC = () => {
  const { chatHistory, setCurrentChatId, createNewChat } = useChat();

  return (
    <aside className="w-1/4 bg-gray-900 text-white p-4 max-w-[300px] border-r border-gray-700 overflow-y-auto h-[calc(100vh)] custom-scrollbar">
      <button
        className="bg-gray-700 p-2 rounded mb-4 w-full text-center text-1xl"
        onClick={createNewChat}
      >
        New Chat
      </button>
      <h2 className="text-lg font-bold mb-4">Chat History</h2>
      <ul>
        {chatHistory
          .slice()
          .reverse()
          .map((chat, index) => (
            <li
              key={index}
              className="mb-2 cursor-pointer"
              onClick={() => setCurrentChatId(chat.id)}
            >
              <div className="truncate">{chat.title}</div>
              <div className="text-xs text-gray-400">{chat.date}</div>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
