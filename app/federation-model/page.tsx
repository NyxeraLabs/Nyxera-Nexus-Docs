import { DocsShell } from '@/components/docs-shell';

export default function Page() {
  return (
    <DocsShell title="Federation Model">
      <p>The federation model preserves system autonomy while exchanging signed execution and telemetry artifacts.</p>
      <p className="mt-3">Identity trust boundaries enforce tenant isolation and provenance continuity across systems.</p>
    </DocsShell>
  );
}
