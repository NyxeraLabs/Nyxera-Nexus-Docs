import { DocsShell } from '@/components/docs-shell';
import { DocContent } from '@/components/doc-content';

export default async function Page() {
  return (
    <DocsShell title="Overview">
      <DocContent docPath="solution-overview.md" />
    </DocsShell>
  );
}
