import { DocsShell } from '@/components/docs-shell';
import { DocContent } from '@/components/doc-content';

export default async function Page() {
  return (
    <DocsShell title="Compliance Inheritance">
      <DocContent docPath="enterprise-security-model.md" />
    </DocsShell>
  );
}
