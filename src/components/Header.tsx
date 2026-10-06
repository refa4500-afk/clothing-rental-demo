import { useEffect, useState } from 'react';
import { useRouter } from '@/router';

export function Header() {
  const { route, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = route.name === 'home';

  const goHome = () => {
    setMenuOpen(false);
    navigate({ name: 'home' });
  };
  const goCatalog = () => {
    setMenuOpen(false);
    navigate({ name: 'catalog' });
  };

  const linkClass = (active: boolean) =>
    `text-sm tracking-wide transition-colors duration-300 hover:text-ink ${
      active ? 'text-ink' : 'text-stone-500'
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-ivory/95 backdrop-blur-md border-b border-beige-200/60 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <button onClick={goHome} className="flex items-center gap-2 group">
            <span className="text-2xl font-display font-700 tracking-tightest text-ink">
              نِستا
            </span>
            <span className="hidden sm:inline text-2xs tracking-widest2 text-stone-400 mt-1">
              NESTA
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-10">
            <button onClick={goHome} className={linkClass(route.name === 'home')}>
              خانه
            </button>
            <button onClick={goCatalog} className={linkClass(route.name === 'catalog')}>
              کمد لباس
            </button>
            <button
              onClick={goHome}
              className={linkClass(false)}
            >
              چطور کار می‌کند
            </button>
          </nav>

          <button
            onClick={goCatalog}
            className="hidden md:inline-flex text-sm tracking-wide bg-ink text-ivory px-6 py-2.5 hover:bg-charcoal transition-colors duration-300"
          >
            مشاهده لباس‌ها
          </button>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="منو"
          >
            <span
              className={`w-6 h-px bg-ink transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-px bg-ink transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-px bg-ink transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-ivory md:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <button
              onClick={goHome}
              className="text-2xl font-display text-ink"
            >
              خانه
            </button>
            <button
              onClick={goCatalog}
              className="text-2xl font-display text-ink"
            >
              کمد لباس
            </button>
            <button
              onClick={goHome}
              className="text-2xl font-display text-stone-500"
            >
              چطور کار می‌کند
            </button>
          </div>
        </div>
      )}
    </>
  );
}
