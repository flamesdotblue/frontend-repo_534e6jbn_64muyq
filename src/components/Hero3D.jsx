import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle vignette and gradient glow overlays - don't block Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute -inset-x-10 -top-10 h-[60vh] bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.25),transparent_60%)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-white/5 px-3 py-1 text-xs text-amber-200/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            Premium Event Management
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            We Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">Unforgettable</span> Experiences
          </h1>
          <p className="mt-5 text-white/80 text-lg md:text-xl leading-relaxed">
            From weddings to corporate galas — we design memories, not just events.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 text-black px-6 py-3 font-semibold shadow-[0_8px_30px_rgba(251,191,36,0.35)] hover:shadow-[0_8px_40px_rgba(251,191,36,0.55)] transition-shadow"
            >
              Plan Your Event
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 hover:bg-white/10 backdrop-blur"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>

      {/* floating decorative lights */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-40 h-2 w-2 rounded-full bg-amber-300/70 blur-[1.5px] animate-ping" />
        <div className="absolute right-14 top-24 h-1.5 w-1.5 rounded-full bg-yellow-200/70 blur-[1px] animate-ping [animation-delay:400ms]" />
        <div className="absolute right-24 bottom-32 h-2 w-2 rounded-full bg-amber-400/80 blur-[2px] animate-ping [animation-delay:800ms]" />
      </div>
    </section>
  );
}
