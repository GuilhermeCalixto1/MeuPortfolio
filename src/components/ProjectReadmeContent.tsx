import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface ProjectReadmeContentProps {
  readme: string;
}

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="mt-2 mb-4 text-2xl font-bold tracking-tight text-foreground">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-7 mb-3 border-b border-border/60 pb-2 text-xl font-semibold text-foreground">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 mb-2 text-lg font-semibold text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-7 text-[0.95rem] text-muted-foreground">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 ml-5 list-disc space-y-1 text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 ml-5 list-decimal space-y-1 text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-primary underline underline-offset-4 hover:opacity-80"
    >
      {children}
    </a>
  ),
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt ?? "Imagem do README"}
      className="my-4 mx-auto h-auto max-h-[260px] w-auto max-w-full rounded-lg border border-border/60 bg-card object-contain"
      loading="lazy"
      decoding="async"
      fetchPriority="low"
    />
  ),
  table: ({ children }) => (
    <div className="my-5 overflow-x-auto rounded-lg border border-border/60">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="bg-muted px-3 py-2 text-left font-semibold text-foreground">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-t border-border/50 px-3 py-2 align-top text-muted-foreground">
      {children}
    </td>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-4 border-l-4 border-primary/60 bg-muted/40 px-4 py-2 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => (
    <pre className="my-4 overflow-x-auto rounded-lg border border-border/60 bg-muted/70 p-4 text-sm">
      {children}
    </pre>
  ),
  code: ({ children, className }) => {
    const content = String(children ?? "");
    const isBlockCode = content.includes("\n") || Boolean(className);

    if (isBlockCode) {
      return <code className="text-[0.9em] leading-6 text-foreground">{children}</code>;
    }

    return (
      <code className="rounded bg-muted px-1.5 py-0.5 text-[0.85em] text-foreground">
        {children}
      </code>
    );
  },
  hr: () => <hr className="my-8 border-border/60" />,
};

const ProjectReadmeContent = ({ readme }: ProjectReadmeContentProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={markdownComponents}
    >
      {readme}
    </ReactMarkdown>
  );
};

export default ProjectReadmeContent;