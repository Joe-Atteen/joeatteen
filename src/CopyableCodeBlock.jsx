// CopyableCodeBlock.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CopyableCodeBlock = ({ children, className, language, ...props }) => {
  const [copied, setCopied] = useState(false);

  const codeString = String(children).replace(/\n$/, "");
  const match = /language-(\w+)/.exec(className || "");
  const detectedLanguage = language || (match ? match[1] : "text");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = codeString;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error("Fallback copy failed: ", fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="relative group my-4" {...props}>
      {/* Language label and copy button */}
      <div className="flex justify-between items-center bg-[#2d2d2d] px-4 py-2 text-sm rounded-t-md border-b border-[#444]">
        <span className="text-[#a0a0a0] font-mono text-xs uppercase tracking-wider">
          {detectedLanguage || "text"}
        </span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-3 py-1 bg-[#333] hover:bg-[#444] text-[#e1e1e1] rounded text-xs transition-all duration-200 opacity-0 group-hover:opacity-100"
          title="Copy code"
        >
          {copied ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code content with react-syntax-highlighter */}
      <SyntaxHighlighter
        language={detectedLanguage}
        style={oneDark}
        customStyle={{
          margin: 0,
          borderRadius: "0 0 0.375rem 0.375rem",
          fontSize: "0.875rem",
          padding: "1rem",
        }}
        showLineNumbers={true}
        wrapLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

CopyableCodeBlock.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  language: PropTypes.string,
};

export default CopyableCodeBlock;
