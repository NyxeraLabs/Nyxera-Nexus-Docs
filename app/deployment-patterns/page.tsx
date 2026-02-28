import { DocsShell } from '@/components/docs-shell';

export default function Page() {
  return (
    <DocsShell title="Deployment Patterns">
      <p>Standalone deployments run SpectraStrike and VectorVue independently.</p>
      <p className="mt-3">Integrated deployments run both with federation enabled for shared assurance workflows.</p>
    </DocsShell>
  );
}
