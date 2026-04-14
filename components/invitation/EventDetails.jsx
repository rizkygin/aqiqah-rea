import { motion } from 'framer-motion';
import { MapPin, Clock, CalendarDays, Navigation } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8 } },
};

export default function EventDetails({ onOpenRsvp }) {
  return (
    <section className="py-24 px-6 md:px-[10vw] relative">
      <div className="w-20 h-[0.5px] mx-auto mb-12" style={{ background: '#E197AB' }} />

      <motion.h2
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-cormorant italic text-3xl md:text-4xl text-center text-foreground mb-4"
      >
        The Gathering
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="font-inter text-sm text-center text-muted-foreground mb-16 max-w-md mx-auto"
      >
        We would be honored by your presence
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-2xl mx-auto rounded-3xl p-8 md:p-12 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255,245,247,0.9) 0%, rgba(253,221,230,0.6) 100%)',
          boxShadow: '0 16px 48px rgba(225, 151, 171, 0.12)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="grid md:grid-cols-3 gap-8 text-center mb-10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#F8C8DC' }}>
              <CalendarDays className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="font-cormorant text-2xl text-foreground">Sabtu, 18 April, 2026</p>
              <p className="font-inter text-xs text-muted-foreground mt-1">29 Shawwal 1447</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#F8C8DC' }}>
              <Clock className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="font-cormorant text-2xl text-foreground">08:00 - 15:00 </p>
              <p className="font-inter text-xs text-muted-foreground mt-1">Waktu Indonesia Barat</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#F8C8DC' }}>
              <MapPin className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="font-cormorant text-2xl text-foreground">Rumah Kami</p>
              <p className="font-inter text-xs text-muted-foreground mt-1">Jl. Bhayangkara Pasir Panjang, Gg Palem 1</p>
              <p className="font-inter text-xs text-muted-foreground mt-1">Pangkalan Bun, 74112</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="https://maps.app.goo.gl/ZxGMQvhfY1hriBdQ7">
            <button
              className="font-inter text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #E197AB 0%, #D4849A 100%)',
                minWidth: '44px',
                minHeight: '44px',
              }}
            >
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                Buka Google Maps
              </div>
            </button>
          </a>

        </div>
      </motion.div>
    </section>
  );
}