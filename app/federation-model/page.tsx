import { DocsShell } from '@/components/docs-shell';
import { DocContent } from '@/components/doc-content';

export default async function Page() {
  return (
    <DocsShell title="Federation Model">
      <DocContent docPath="federation-model.md" />
    </DocsShell>
  );
}
