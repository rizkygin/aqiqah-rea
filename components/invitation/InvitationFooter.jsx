import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function InvitationFooter() {
  return (
    <footer className="py-16 px-6 text-center relative">
      <div className="w-20 h-[0.5px] mx-auto mb-10" style={{ background: '#E197AB' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p
          className="text-xl md:text-2xl mb-2"
          style={{ fontFamily: "'Amiri', serif", color: '#C07A8E', direction: 'rtl' }}
        >
          الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
        </p>
        <p className="font-inter text-xs text-muted-foreground/60 mb-6">All praise be to Allah, Lord of all worlds</p>
        <p className="font-cormorant italic text-2xl md:text-3xl text-foreground mb-4">
          With love and gratitude
        </p>
        <p className="font-inter text-sm text-muted-foreground mb-8">
          Keluarga besar yang berbahagia Putra Pratanggapati dan Reny Apriliani
        </p>

        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-[0.5px]" style={{ background: '#E197AB' }} />
          <Heart className="w-4 h-4" style={{ color: '#E197AB' }} />
          <div className="w-8 h-[0.5px]" style={{ background: '#E197AB' }} />
        </div>

        <p className="font-inter text-xs text-muted-foreground/50">
          Aqiqah Celebration of Rhea Arunika Humaira — 2026 ♥️
        </p>
      </motion.div>
    </footer>
  );
}