import type { Metadata } from 'next';
import './globals.css';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.nyxera-nexus.nyxera.cloud'),
  title: {
    default: 'Nyxera Nexus Documentation',
    template: '%s | Nyxera Nexus Docs'
  },
  description: 'Nyxera Nexus documentation for federation model, deployment, and compliance inheritance.',
  icons: { icon: '/nexus-logo.svg' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-nexus-border bg-[#0b111a]/90 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <a href="https://docs.nyxera-nexus.nyxera.cloud" className="flex items-center gap-3">
              <img src="/nexus-logo.svg" alt="Nyxera Nexus logo" className="h-9 w-9" />
              <span className="font-brand text-sm uppercase tracking-[0.12em] text-nexus-text">Nyxera Nexus Documentation</span>
            </a>
            <nav className="flex flex-wrap gap-2 text-xs sm:text-sm text-nexus-muted">
              <a href="https://nyxera-nexus.nyxera.cloud" className="rounded border border-nexus-border px-3 py-2 hover:border-nexus-accent hover:text-nexus-text">Product</a>
              <a href="https://vectorvue.nyxera.cloud" className="rounded border border-nexus-border px-3 py-2 hover:border-nexus-accent hover:text-nexus-text">VectorVue</a>
              <a href="https://spectrastrike.nyxera.cloud" className="rounded border border-nexus-border px-3 py-2 hover:border-nexus-accent hover:text-nexus-text">SpectraStrike</a>
            </nav>
          </div>
        </header>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
