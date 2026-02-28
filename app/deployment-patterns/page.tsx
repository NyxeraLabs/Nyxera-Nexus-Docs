import { DocsShell } from '@/components/docs-shell';
import { DocContent } from '@/components/doc-content';

export default async function Page() {
  return (
    <DocsShell title="Deployment Patterns">
      <DocContent docPath="deployment-patterns.md" />
    </DocsShell>
  );
}
