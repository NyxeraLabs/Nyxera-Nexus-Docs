import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { ReactNode } from 'react';

function stripFrontMatter(markdown: string): string {
  if (!markdown.startsWith('---\n')) return markdown;
  const end = markdown.indexOf('\n---\n', 4);
  if (end === -1) return markdown;
  return markdown.slice(end + 5).trim();
}

function parseInline(text: string, keyPrefix: string): ReactNode[] {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g).filter(Boolean);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;
    return (
      <a key={`${keyPrefix}-link-${i}`} href={match[2]} className="underline decoration-nexus-accent/70 underline-offset-4 hover:text-nexus-text">
        {match[1]}
      </a>
    );
  });
}

export async function loadDoc(relativePath: string): Promise<string> {
  const docPath = join(process.cwd(), 'docs', relativePath);
  const raw = await readFile(docPath, 'utf8');
  return stripFrontMatter(raw);
}

export function renderMarkdown(markdown: string): ReactNode[] {
  const lines = markdown.split('\n');
  const nodes: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i += 1;
      continue;
    }

    if (trimmed.startsWith('```')) {
      const language = trimmed.slice(3).trim();
      const block: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        block.push(lines[i]);
        i += 1;
      }
      i += 1;
      nodes.push(
        <pre key={`code-${nodes.length}`} className="overflow-x-auto rounded-lg border border-nexus-border bg-[#0a0f16] p-4 text-xs text-nexus-muted">
          <code className={language ? `language-${language}` : undefined}>{block.join('\n')}</code>
        </pre>
      );
      continue;
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const content = heading[2];
      const key = `h-${nodes.length}`;
      if (level === 1) nodes.push(<h1 key={key} className="docs-h1">{parseInline(content, key)}</h1>);
      else if (level === 2) nodes.push(<h2 key={key} className="docs-h2">{parseInline(content, key)}</h2>);
      else if (level === 3) nodes.push(<h3 key={key} className="docs-h3">{parseInline(content, key)}</h3>);
      else nodes.push(<h4 key={key} className="docs-h4">{parseInline(content, key)}</h4>);
      i += 1;
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ''));
        i += 1;
      }
      nodes.push(
        <ul key={`ul-${nodes.length}`} className="docs-ul">
          {items.map((item, idx) => (
            <li key={`li-${idx}`}>{parseInline(item, `ul-${nodes.length}-${idx}`)}</li>
          ))}
        </ul>
      );
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i += 1;
      }
      nodes.push(
        <ol key={`ol-${nodes.length}`} className="docs-ol">
          {items.map((item, idx) => (
            <li key={`oli-${idx}`}>{parseInline(item, `ol-${nodes.length}-${idx}`)}</li>
          ))}
        </ol>
      );
      continue;
    }

    nodes.push(
      <p key={`p-${nodes.length}`} className="docs-p">
        {parseInline(trimmed, `p-${nodes.length}`)}
      </p>
    );
    i += 1;
  }

  return nodes;
}
