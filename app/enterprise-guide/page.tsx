import { DocsShell } from '@/components/docs-shell';
import { DocContent } from '@/components/doc-content';

export default async function Page() {
  return (
    <DocsShell title="Enterprise Guide">
      <DocContent docPath="execution-to-telemetry-flow.md" />
    </DocsShell>
  );
}
