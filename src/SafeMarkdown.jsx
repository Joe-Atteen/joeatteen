// SafeMarkdown.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import SimpleBlogRenderer from "./SimpleBlogRenderer";

/**
 * A safe wrapper around ReactMarkdown that falls back to a simpler renderer
 * if ReactMarkdown throws an error
 */
const SafeMarkdown = ({ children, components }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    console.log("Using fallback renderer due to ReactMarkdown error");
    return <SimpleBlogRenderer content={children} />;
  }

  try {
    return <ReactMarkdown components={components}>{children}</ReactMarkdown>;
  } catch (error) {
    console.error("Error rendering markdown:", error);
    setHasError(true);
    return <SimpleBlogRenderer content={children} />;
  }
};

SafeMarkdown.propTypes = {
  children: PropTypes.string,
  components: PropTypes.object,
};

export default SafeMarkdown;
