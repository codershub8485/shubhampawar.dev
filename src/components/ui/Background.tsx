/** Slow aurora gradient mesh + grain. Pure CSS transforms, so it stays on the compositor. */
export function Background() {
  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-[20%] -top-[30%] h-[80vmax] w-[80vmax] animate-aurora rounded-full opacity-[0.18] blur-[120px] will-change-transform"
          style={{
            background: 'radial-gradient(circle, rgb(var(--accent-a)) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute -bottom-[35%] -right-[20%] h-[70vmax] w-[70vmax] animate-aurora rounded-full opacity-[0.14] blur-[120px] will-change-transform [animation-delay:-11s]"
          style={{
            background: 'radial-gradient(circle, rgb(var(--accent-b)) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(rgb(var(--line) / 0.035) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--line) / 0.035) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at 50% 0%, #000 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, #000 20%, transparent 70%)',
          }}
        />
      </div>
      <div aria-hidden className="grain" />
    </>
  );
}
