import ReactTextareaAutosize from "react-textarea-autosize";
import { GrSend } from "react-icons/gr";
import { ImSpinner6 } from "react-icons/im";

import { useChat } from "@/context/ChatContext";

interface ChatInputProps {
  input: string;
  setInput: (input: string) => void;
  handleSend: () => void;
  responseHeight: number;
  setResponseHeight: (number: number) => void;
}

function ChatInput({
  input,
  setInput,
  handleSend,
  responseHeight,
  setResponseHeight,
}: ChatInputProps) {
  const { loading } = useChat();

  return (
    <div className="flex justify-center items-center max-md:gap-1 gap-3 p-4">
      <ReactTextareaAutosize
        className="px-3 py-2 border bg-input relative focus:outline-none rounded-lg w-[65%] resize-none max-h-52"
        rows={1}
        placeholder="Message"
        value={input}
        onHeightChange={setResponseHeight}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
      />
      <button
        className="flex justify-center items-center text-white rounded-full p-2 w-10 h-10 bg-white"
        onClick={handleSend}
      >
        {loading ? (
          <ImSpinner6 className="animate-spin text-2xl text-[#111827]" />
        ) : (
          <GrSend className="text-xl text-[#111827]" />
        )}
      </button>
    </div>
  );
}

export default ChatInput;
