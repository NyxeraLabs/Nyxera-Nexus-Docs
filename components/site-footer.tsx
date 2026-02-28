export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-nexus-border bg-[#0a0f16]">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-sm text-nexus-muted sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <img src="/nyxera-logo.png" alt="Nyxera Labs logo" className="h-9 w-9 object-contain" />
          <span>© 2026 Nyxera Labs — All Rights Reserved</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href="https://docs.spectrastrike.nyxera.cloud" className="rounded border border-nexus-border px-2 py-1 hover:border-nexus-accent hover:text-nexus-text">SpectraStrike Docs</a>
          <a href="https://docs.vectorvue.nyxera.cloud" className="rounded border border-nexus-border px-2 py-1 hover:border-nexus-accent hover:text-nexus-text">VectorVue Docs</a>
          <a href="https://nyxera.cloud" className="rounded border border-nexus-border px-2 py-1 hover:border-nexus-accent hover:text-nexus-text">nyxera.cloud</a>
        </div>
      </div>
    </footer>
  );
}
