import { useEffect, useState } from 'react';

/** Returns the id of the section currently nearest the top third of the viewport. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return active;
}
