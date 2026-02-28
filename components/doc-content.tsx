import { loadDoc, renderMarkdown } from '@/lib/docs';

export async function DocContent({ docPath }: { docPath: string }) {
  const markdown = await loadDoc(docPath);
  return <div className="docs-prose">{renderMarkdown(markdown)}</div>;
}
