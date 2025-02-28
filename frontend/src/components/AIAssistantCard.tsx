import React from "react";
import { FaRobot } from "react-icons/fa";

import { AIAssistantCardProps } from "../types/ComponentProps";

const AIAssistantCard: React.FC<AIAssistantCardProps> = ({
  assistant,
  onClick,
}) => {
  return (
    <div
      className="p-4 border border-gray-700 rounded-lg bg-gray-900 text-white cursor-pointer hover:bg-gray-700"
      onClick={() => onClick(assistant)}
    >
      <div className="flex items-center space-x-2">
        <div className="bg-gray-700 p-2 rounded-full">
          <span role="img" aria-label="icon">
            <FaRobot />
          </span>
        </div>
        <h2 className="text-lg font-bold">{assistant.title}</h2>
      </div>
      <p className="text-sm">{assistant.description}</p>
    </div>
  );
};

export default AIAssistantCard;
