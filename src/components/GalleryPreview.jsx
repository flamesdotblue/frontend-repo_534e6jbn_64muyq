import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop', tag: 'Weddings', title: 'Golden Hour Vows', date: 'Nov 2024' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1920&auto=format&fit=crop', tag: 'Concerts', title: 'Neon Nights Live', date: 'Aug 2024' },
  { src: 'https://images.unsplash.com/photo-1589208347862-da0f82461a15?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHb2xkZW4lMjBIb3VyJTIwVm93c3xlbnwwfDB8fHwxNzYxODQyNzUwfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', tag: 'Corporate', title: 'Gala Excellence', date: 'Jan 2025' },
  { src: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1920&auto=format&fit=crop', tag: 'Birthdays', title: 'Candlelit Soirée', date: 'Sep 2024' },
  { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop', tag: 'Fests', title: 'Campus Carnival', date: 'Mar 2025' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920&auto=format&fit=crop', tag: 'Launch', title: 'Product Debut', date: 'Dec 2024' },
];

export default function GalleryPreview() {
  const [open, setOpen] = useState(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="gallery" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">A Glimpse of Our Craft</h2>
          <p className="mt-3 text-white/70">Hover to explore; click to view larger</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <motion.button
              key={i}
              onClick={() => setOpen(img)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src={img.src}
                alt={img.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3">
                <span className="inline-flex items-center rounded-full bg-black/60 px-2 py-0.5 text-xs text-amber-200/90 backdrop-blur">
                  {img.tag}
                </span>
                <div className="mt-2 text-left">
                  <div className="text-white font-medium drop-shadow">{img.title}</div>
                  <div className="text-white/70 text-xs">{img.date}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {mounted && open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur"
            onClick={() => setOpen(null)}
          >
            <motion.img
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 10, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 140, damping: 18 }}
              src={open.src}
              alt={open.title}
              className="max-h-[80vh] max-w-[90vw] rounded-xl border border-white/10 shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
