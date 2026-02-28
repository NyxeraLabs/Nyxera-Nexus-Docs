import { DocsShell } from '@/components/docs-shell';

export default function Home() {
  return (
    <DocsShell title="Nyxera Nexus Docs">
      <p>Nyxera Nexus is the enterprise integration fabric connecting SpectraStrike execution assurance and VectorVue continuous validation.</p>
      <p className="mt-3">This portal includes architecture, federation, deployment, data model, security model, and integration specifications for production-scale security validation programs.</p>
      <pre className="mt-4 overflow-x-auto rounded border border-nexus-border bg-[#0a0f16] p-4 text-xs text-nexus-muted">{`flowchart LR
subgraph OffensiveLayer
Operator --> SpectraStrike
end

subgraph ValidationLayer
SpectraStrike --> VectorVue
VectorVue --> Correlation
Correlation --> EvidenceStore
end

subgraph Enterprise
EvidenceStore --> Dashboard
Dashboard --> GRC
end`}</pre>
      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        <a href="/docs/index.md" className="rounded border border-nexus-border px-3 py-2 hover:border-nexus-accent hover:text-nexus-text">Nexus Markdown Index</a>
        <a href="https://docs.spectrastrike.nyxera.cloud" className="rounded border border-nexus-border px-3 py-2 hover:border-nexus-accent hover:text-nexus-text">SpectraStrike Docs</a>
        <a href="https://docs.vectorvue.nyxera.cloud" className="rounded border border-nexus-border px-3 py-2 hover:border-nexus-accent hover:text-nexus-text">VectorVue Docs</a>
      </div>
    </DocsShell>
  );
}
