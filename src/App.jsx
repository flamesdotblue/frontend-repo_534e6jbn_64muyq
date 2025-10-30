import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import GalleryPreview from './components/GalleryPreview';

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60]">
      <div className="h-0.5 w-full bg-white/10" />
      <div
        className="h-0.5 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-600 shadow-[0_0_12px_rgba(251,191,36,0.7)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#070709] text-white selection:bg-amber-300/30 selection:text-amber-200">
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero3D />
        <section id="about" className="relative py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,213,90,0.08),transparent_60%)]" />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-5">
            <div className="md:col-span-3">
              <h2 className="text-2xl md:text-3xl font-semibold">Who We Are</h2>
              <p className="mt-4 text-white/75 leading-relaxed">
                We are a luxury event house crafting cinematic celebrations that feel effortless and
                unforgettable. Our team blends creative direction with meticulous production — so you can enjoy the moment while we perfect every detail.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                End‑to‑end planning • Bespoke design • On‑time execution
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.25),transparent_60%)]" />
                <img
                  src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1600&auto=format&fit=crop"
                  alt="Founder"
                  className="h-full w-full object-cover opacity-90 mix-blend-luminosity"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <Services />
        <GalleryPreview />

        <section id="book" className="relative py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,200,0,0.10),transparent_60%)]" />
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold">Let’s Make Your Next Event Spectacular</h3>
            <p className="mt-3 text-white/70">Share a few details and we’ll craft a custom proposal.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 grid gap-4 sm:grid-cols-2 text-left"
            >
              <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" placeholder="Full Name" />
              <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" placeholder="Email" />
              <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50" placeholder="Phone" />
              <select className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none text-white/80">
                <option className="bg-[#070709]">Event Type</option>
                <option className="bg-[#070709]">Wedding</option>
                <option className="bg-[#070709]">Corporate</option>
                <option className="bg-[#070709]">Birthday</option>
                <option className="bg-[#070709]">Product Launch</option>
                <option className="bg-[#070709]">Concert / Fest</option>
              </select>
              <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50 sm:col-span-2" placeholder="Preferred Date & City" />
              <button className="sm:col-span-2 mt-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 text-black px-6 py-3 font-semibold shadow-[0_8px_30px_rgba(251,191,36,0.35)] hover:shadow-[0_8px_40px_rgba(251,191,36,0.55)] transition-shadow">
                Get Custom Quote
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative mt-10 border-t border-white/10 bg-gradient-to-b from-transparent to-white/[0.03] py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© 2025 Aurelia Events. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/70 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* floating Book button */}
      <a
        href="#book"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 px-5 py-3 text-sm font-semibold text-black shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50"
      >
        Book Now
      </a>
    </div>
  );
}
