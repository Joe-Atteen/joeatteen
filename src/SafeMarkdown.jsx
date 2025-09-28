import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import CopyableCodeBlock from "./CopyableCodeBlock";
import "./prose.css";

const SafeMarkdown = ({ children, components = {} }) => {
  // Check if content is HTML
  const isHTML = children && children.includes("<p>");

  // Default components with code block handling
  const defaultComponents = {
    code({ className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const isInline = !match && !String(children).includes("\n");

      return !isInline && match ? (
        <CopyableCodeBlock className={className}>
          {String(children).replace(/\n$/, "")}
        </CopyableCodeBlock>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  const mergedComponents = { ...defaultComponents, ...components };

  // If HTML, render directly
  if (isHTML) {
    return (
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  }

  if (!children) {
    return <div>No content</div>;
  }

  return (
    <div className="prose prose-lg max-w-none prose-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        components={mergedComponents}
        remarkRehypeOptions={{
          clobberPrefix: "",
          whitespace: "pre-wrap"
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

SafeMarkdown.propTypes = {
  children: PropTypes.string,
  components: PropTypes.object,
};

export default SafeMarkdown;
