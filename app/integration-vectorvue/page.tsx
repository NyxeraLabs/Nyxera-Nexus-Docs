import { DocContent } from '@/components/doc-content';
import { DocsShell } from '@/components/docs-shell';

export default async function Page() {
  return (
    <DocsShell title="VectorVue Integration">
      <DocContent docPath="integration-vectorvue.md" />
    </DocsShell>
  );
}
