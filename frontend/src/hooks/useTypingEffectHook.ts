import { useState, useEffect, useRef } from "react";

interface TypingEffectProps {
  textToType: string;
  interKeyStrokeDurationMs: number;
  setNewMessage?: (message: string) => void;
  setNewMessageTimestamp?: (timestamp: string) => void;
  isStream?: boolean;
}

interface TypingEffectReturn {
  loading: boolean;
  typedMessage: string;
}

export const useTypingEffect = ({
  textToType,
  interKeyStrokeDurationMs,
  setNewMessage,
  setNewMessageTimestamp,
  isStream = false,
}: TypingEffectProps): TypingEffectReturn => {
  // States
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const currentPositionRef = useRef<number>(0);

  useEffect(() => {
    setLoading(false);
    const intervalId = setInterval(() => {
      setCurrentPosition((value) => value + 1);
      currentPositionRef.current += 1;

      if (currentPositionRef.current > textToType.length) {
        clearInterval(intervalId);
        setLoading(true);
        if (setNewMessage) {
          setNewMessage("");
          if (setNewMessageTimestamp) {
            setNewMessageTimestamp("");
          }
        }
      }
    }, interKeyStrokeDurationMs);

    return () => {
      clearInterval(intervalId);
      if (!isStream) {
        currentPositionRef.current = 0;
        setCurrentPosition(0);
      }
    };
  }, [
    interKeyStrokeDurationMs,
    textToType,
    setNewMessage,
    setNewMessageTimestamp,
    isStream,
  ]);

  return {
    loading,
    typedMessage: textToType.substring(0, currentPosition),
  };
};
