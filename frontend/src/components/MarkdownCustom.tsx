import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";

const CustomList: React.FC<React.HTMLAttributes<HTMLUListElement>> = (
  props
) => <ul className="list-disc block" {...props} />;

const CustomOrderedList: React.FC<React.HTMLAttributes<HTMLOListElement>> = (
  props
) => <ol className="list-decimal block" {...props} />;

const CustomParagraph: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = (
  props
) => <p {...props} />;

interface MarkDownCustomProps {
  children: string;
}

const MarkDownCustom: React.FC<MarkDownCustomProps> = ({ children }) => {
  return (
    <ReactMarkdown
      components={{
        ul: CustomList,
        ol: CustomOrderedList,
        p: CustomParagraph,
      }}
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeRaw]}
    >
      {children}
    </ReactMarkdown>
  );
};

export default MarkDownCustom;
