import { DocsShell } from '@/components/docs-shell';
import { DocContent } from '@/components/doc-content';

export default async function Page() {
  return (
    <DocsShell title="Use Cases">
      <DocContent docPath="use-cases.md" />
    </DocsShell>
  );
}
