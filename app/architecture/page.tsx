import { DocsShell } from '@/components/docs-shell';

export default function Page() {
  return (
    <DocsShell title="Architecture">
      <p>Nexus architecture separates control-plane governance from data-plane telemetry and evidence flow.</p>
      <ul className="mt-4 list-disc space-y-2 pl-5">
        <li><a href="/docs/nexus-architecture.md" className="underline">Nexus Architecture (full)</a></li>
        <li><a href="/docs/component-deep-dive.md" className="underline">Component Deep Dive</a></li>
        <li><a href="/docs/data-model.md" className="underline">Data Model</a></li>
        <li><a href="/docs/diagrams/system-architecture.md" className="underline">System Architecture Diagram</a></li>
      </ul>
    </DocsShell>
  );
}
