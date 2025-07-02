// SimpleBlogRenderer.jsx
import PropTypes from "prop-types";

/**
 * A simple blog content renderer that doesn't rely on ReactMarkdown
 * Used as a fallback when ReactMarkdown is not working
 */
const SimpleBlogRenderer = ({ content }) => {
  if (!content) return <p className="text-[#a0a0a0]">No content available.</p>;

  // Create a simple rendering of markdown-like content
  // This won't parse markdown properly but will at least make the content readable
  const processedContent = content
    // Add horizontal rules for sections
    .replace(/^---+$/gm, '<hr class="my-6 border-t border-[#333]" />')
    // Make headings stand out
    .replace(
      /^# (.+)$/gm,
      '<h1 class="text-3xl font-gt-bold text-white my-6">$1</h1>'
    )
    .replace(
      /^## (.+)$/gm,
      '<h2 class="text-2xl font-gt-semibold text-white my-5">$2</h2>'
    )
    .replace(
      /^### (.+)$/gm,
      '<h3 class="text-xl font-gt-medium text-white my-4">$1</h3>'
    )
    // Basic formatting
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(
      /`(.+?)`/g,
      '<code class="bg-[#333] text-[#ecc9b0] px-1 py-0.5 rounded text-sm">$1</code>'
    )
    // Split by double new lines for paragraphs
    .split(/\n\n+/)
    .map((p) => {
      // Check if it's already a heading from our replacements above
      if (p.startsWith("<h")) return p;

      // For code blocks
      if (p.includes("```")) {
        return `<pre class="bg-[#333] p-4 rounded-md text-sm overflow-x-auto my-4 text-white">${p.replace(
          /```.*\n([\s\S]*?)```/g,
          "$1"
        )}</pre>`;
      }

      // Basic lists (very simplified)
      if (p.trim().startsWith("- ")) {
        const items = p
          .split("\n")
          .map((item) => `<li class="mb-2">${item.replace(/^- /, "")}</li>`)
          .join("");
        return `<ul class="list-disc pl-6 my-4">${items}</ul>`;
      }

      // For blockquotes
      if (p.trim().startsWith(">")) {
        return `<blockquote class="border-l-4 border-[#ecc9b0] pl-4 italic my-6 text-[#d1d1d1]">${p.replace(
          /^>\s*/g,
          ""
        )}</blockquote>`;
      }

      // Regular paragraph
      return `<p class="my-4 text-[#e1e1e1]">${p}</p>`;
    })
    .join("");

  return (
    <div
      className="text-[#f1f1f1] font-gt-light leading-relaxed"
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  );
};

SimpleBlogRenderer.propTypes = {
  content: PropTypes.string,
};

export default SimpleBlogRenderer;
