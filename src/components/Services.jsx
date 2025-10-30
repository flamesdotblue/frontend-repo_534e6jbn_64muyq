import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, PartyPopper, Megaphone, Music, Camera, Utensils } from 'lucide-react';

const services = [
  { title: 'Weddings', Icon: PartyPopper, desc: 'Elegant ceremonies, curated décor, and flawless coordination.' },
  { title: 'Corporate Events', Icon: Briefcase, desc: 'Conferences, off-sites, launches — delivered with precision.' },
  { title: 'College Fests', Icon: GraduationCap, desc: 'High-energy fests with stages, artists, and management.' },
  { title: 'Product Launches', Icon: Megaphone, desc: 'Show-stopping reveals with premium staging and AV.' },
  { title: 'Concerts & Festivals', Icon: Music, desc: 'Large-scale production, artist liaison, and crowd ops.' },
  { title: 'Photo & Video', Icon: Camera, desc: 'Cinematic coverage to relive your best moments.' },
  { title: 'Catering', Icon: Utensils, desc: 'Gourmet menus, live counters, and impeccable service.' },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,200,0,0.10),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Services — Crafted for Every Celebration</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Tailored planning, creative direction, and end-to-end execution.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, Icon, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/[0.06]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-amber-400/10 to-yellow-200/10 blur-2xl transition-transform group-hover:scale-125" />
              <div className="relative z-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-yellow-300 text-black shadow-lg shadow-amber-500/30">
                  <Icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
                <div className="mt-5 text-amber-300/90 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
