import { DocsShell } from '@/components/docs-shell';

export default function Page() {
  return (
    <DocsShell title="Architecture">
      <p>Reference flow: Operator -> SpectraStrike -> Federation -> VectorVue -> Analytics.</p>
      <p className="mt-3">Nexus does not merge codebases; it coordinates trust and commercial packaging boundaries.</p>
    </DocsShell>
  );
}
