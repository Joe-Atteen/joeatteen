// Test file to verify the correct usage of ReactMarkdown

import ReactMarkdown from "react-markdown";

// v10+ usage example
const TestMarkdownComponent = () => {
  const markdown = "# Hello\n\nThis is a test of *ReactMarkdown*.";

  return (
    <div>
      <h2>React Markdown Test</h2>
      <div
        style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
      >
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      <p>
        If you see formatted content above (with a heading and italic text),
        ReactMarkdown is working!
      </p>
    </div>
  );
};

export default TestMarkdownComponent;
