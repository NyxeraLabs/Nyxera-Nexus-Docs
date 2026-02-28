import { DocsShell } from '@/components/docs-shell';

export default function Page() {
  return (
    <DocsShell title="Deployment Patterns">
      <p>Nexus supports air-gapped, hybrid cloud, SaaS, on-prem enterprise, and Kubernetes deployment models.</p>
      <ul className="mt-4 list-disc space-y-2 pl-5">
        <li><a href="/docs/deployment-patterns.md" className="underline">Deployment Patterns (full)</a></li>
        <li><a href="/docs/enterprise-security-model.md" className="underline">Enterprise Security Model</a></li>
        <li><a href="/docs/diagrams/evidence-lifecycle.md" className="underline">Evidence Lifecycle Diagram</a></li>
      </ul>
    </DocsShell>
  );
}
