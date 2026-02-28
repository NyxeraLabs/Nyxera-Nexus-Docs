import Link from 'next/link';

const docsLinks = [
  { href: '/', label: 'Docs Home' },
  { href: '/overview', label: 'Overview' },
  { href: '/architecture', label: 'Architecture' },
  { href: '/federation-model', label: 'Federation Model' },
  { href: '/deployment-patterns', label: 'Deployment Patterns' },
  { href: '/compliance-inheritance', label: 'Compliance Inheritance' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/enterprise-guide', label: 'Enterprise Guide' },
  { href: '/reference', label: 'Reference' },
  { href: '/docs/index.md', label: 'Nexus Markdown Index' }
];

export function DocsShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
      <aside className="rounded-xl border border-nexus-border bg-nexus-panel p-4">
        <div className="mb-4 border-b border-nexus-border pb-4">
          <img src="/nexus-logo.svg" alt="Nyxera Nexus logo" className="h-9 w-9" />
          <p className="mt-2 font-brand text-sm uppercase tracking-[0.12em]">Nyxera Nexus Docs</p>
        </div>
        <nav className="space-y-2 text-sm text-nexus-muted">
          {docsLinks.map((item) => (
            <Link key={item.href} href={item.href} className="block rounded border border-nexus-border px-3 py-2 hover:border-nexus-accent hover:text-nexus-text">
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <section className="rounded-xl border border-nexus-border bg-nexus-panel p-6">
        <h1 className="font-brand text-2xl uppercase tracking-[0.1em]">{title}</h1>
        <div className="mt-4 text-nexus-muted">{children}</div>
      </section>
    </div>
  );
}
