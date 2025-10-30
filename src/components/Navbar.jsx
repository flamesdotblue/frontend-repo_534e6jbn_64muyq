import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-yellow-400 to-amber-600 text-black shadow-lg shadow-amber-500/30">
              <Sparkles size={18} />
            </span>
            <span className="font-semibold tracking-wide">Aurelia Events</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#book"
              className="rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 text-black px-4 py-2 text-sm font-semibold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-shadow"
            >
              Book Now
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 bg-gradient-to-r from-amber-500 to-yellow-300 text-black font-semibold"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
