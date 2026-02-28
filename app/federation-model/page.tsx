import { DocsShell } from '@/components/docs-shell';

export default function Page() {
  return (
    <DocsShell title="Federation Model">
      <p>Federation preserves tenant isolation while enabling global policy orchestration and cross-system assurance exchange.</p>
      <ul className="mt-4 list-disc space-y-2 pl-5">
        <li><a href="/docs/federation-model.md" className="underline">Federation Model (full)</a></li>
        <li><a href="/docs/execution-to-telemetry-flow.md" className="underline">Execution to Telemetry Flow</a></li>
        <li><a href="/docs/diagrams/federation-model.md" className="underline">Federation Diagram</a></li>
      </ul>
    </DocsShell>
  );
}
