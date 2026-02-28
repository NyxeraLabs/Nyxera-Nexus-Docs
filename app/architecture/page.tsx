import { DocsShell } from '@/components/docs-shell';
import { DocContent } from '@/components/doc-content';

export default async function Page() {
  return (
    <DocsShell title="Architecture">
      <DocContent docPath="nexus-architecture.md" />
    </DocsShell>
  );
}
