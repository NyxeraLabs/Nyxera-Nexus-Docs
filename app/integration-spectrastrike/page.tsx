import { DocContent } from '@/components/doc-content';
import { DocsShell } from '@/components/docs-shell';

export default async function Page() {
  return (
    <DocsShell title="SpectraStrike Integration">
      <DocContent docPath="integration-spectrastrike.md" />
    </DocsShell>
  );
}
