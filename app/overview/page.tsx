import { DocsShell } from '@/components/docs-shell';

export default function Page() {
  return (
    <DocsShell title="Overview">
      <p>Nyxera Nexus unifies SpectraStrike execution provenance and VectorVue validation analytics into one enterprise evidence workflow.</p>
      <ul className="mt-4 list-disc space-y-2 pl-5">
        <li><a href="/docs/introduction.md" className="underline">Introduction</a></li>
        <li><a href="/docs/solution-overview.md" className="underline">Solution Overview</a></li>
        <li><a href="/docs/index.md" className="underline">Full Nexus Documentation Index</a></li>
      </ul>
    </DocsShell>
  );
}
