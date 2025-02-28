import { FaUserLarge } from "react-icons/fa6";
import { AiFillRobot } from "react-icons/ai";
import { ImSpinner11 } from "react-icons/im";

import { MarkDownCustom } from "@/components";
import { useTypingEffect } from "@/hooks/useTypingEffectHook";

interface MessageListProps {
  messages: Array<{ text: string; sender: string }>;
  error: string | null;
  handleSend: () => void;
}
function MessageList({ messages, error, handleSend }: MessageListProps) {
  const { typedMessage } = useTypingEffect({
    textToType: messages[messages.length - 1]?.text || "",
    interKeyStrokeDurationMs: 1,
    isStream: true,
  });

  console.log({ typedMessage, messages });

  return (
    <>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-2 ${
            msg.sender === "user" ? "text-right" : "text-left"
          }`}
        >
          <span
            className={`inline-flex gap-3 p-3 rounded max-w-[65%] ${
              msg.sender === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            <div className="flex gap-2">
              {msg.sender === "user" ? (
                <FaUserLarge className="h-5 w-5" />
              ) : (
                <AiFillRobot className="h-5 w-5" />
              )}
            </div>
            <div>
              <MarkDownCustom>
                {msg.sender === "user"
                  ? msg?.text
                  : index === messages.length - 1
                  ? typedMessage
                  : msg?.text}
              </MarkDownCustom>
            </div>
          </span>
          <div className="flex justify-end mt-2" onClick={handleSend}>
            {error &&
              msg.sender === "user" &&
              index === messages.length - 2 && (
                <ImSpinner11 className="text-sm text-white text-right" />
              )}
          </div>
          {error && msg.sender === "ai" && index === messages.length - 1 && (
            <p className="text-red-500">{error}</p>
          )}
        </div>
      ))}
    </>
  );
}

export default MessageList;
