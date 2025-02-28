import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { useChatLogic } from "../hooks/useChatLogic";
import { useChatEffects } from "../hooks/useChatEffects";
import { useState } from "react";

function ChatInterface() {
  const [responseHeight, setResponseHeight] = useState(300);

  const { input, setInput, error, messages, sendMessage } = useChatLogic();

  useChatEffects();

  const changeHeight = (height: number) => {
    if (height <= 210) {
      setResponseHeight(258 + height);
    } else {
      setResponseHeight(474);
    }
  };

  console.log({ responseHeight });

  return (
    <div className="flex-1 flex flex-col">
      <div
        className={"overflow-y-auto custom-scrollbar"}
        style={{ height: `calc(100vh - ${responseHeight}px)` }}
      >
        <MessageList
          messages={messages}
          error={error}
          handleSend={sendMessage}
        />
      </div>
      <ChatInput
        input={input}
        setInput={setInput}
        handleSend={sendMessage}
        responseHeight={responseHeight}
        setResponseHeight={changeHeight}
      />
    </div>
  );
}

export default ChatInterface;
