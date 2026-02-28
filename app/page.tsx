import { DocsShell } from '@/components/docs-shell';
import { DocContent } from '@/components/doc-content';

export default async function Home() {
  return (
    <DocsShell title="Nyxera Nexus Docs">
      <DocContent docPath="index.md" />
    </DocsShell>
  );
}
