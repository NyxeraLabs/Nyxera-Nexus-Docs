import { DocsShell } from '@/components/docs-shell';
import { DocContent } from '@/components/doc-content';

export default async function Page() {
  return (
    <DocsShell title="Reference">
      <DocContent docPath="api-and-integration.md" />
      <DocContent docPath="telemetry-api.md" />
    </DocsShell>
  );
}
