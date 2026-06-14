import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugifyHeading } from "@/lib/content";

/** Minimal shape of the hast nodes react-markdown hands us — typed locally
 *  to avoid depending on the transitive `hast` type package. */
type HastNode = {
  type: string;
  value?: string;
  children?: HastNode[];
};

/** Recursively pull the plain text out of a heading node so we can build an
 *  anchor id that matches the table of contents. */
function nodeText(node: HastNode | undefined): string {
  if (!node || !node.children) return "";
  return node.children
    .map((child) => {
      if (child.type === "text") return child.value ?? "";
      if (child.type === "element") return nodeText(child);
      return "";
    })
    .join("");
}

export function MarkdownArticle({ markdown }: { markdown: string }) {
  return (
    <div className="article-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2({ node, children }) {
            const id = slugifyHeading(nodeText(node as HastNode));
            return (
              <h2 id={id} className="group">
                <a href={`#${id}`} className="no-underline">
                  {children}
                </a>
              </h2>
            );
          },
          h3({ node, children }) {
            const id = slugifyHeading(nodeText(node as HastNode));
            return (
              <h3 id={id} className="group">
                <a href={`#${id}`} className="no-underline">
                  {children}
                </a>
              </h3>
            );
          },
          a({ href, children }) {
            const external = href?.startsWith("http");
            return (
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
