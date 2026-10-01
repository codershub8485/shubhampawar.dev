export function StatusPill({ label }: { label: string }) {
  return (
    <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 font-mono text-xs text-fg/90">
      <span className="relative flex h-2 w-2" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping2 rounded-full bg-ok" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
      </span>
      {label}
    </span>
  );
}
