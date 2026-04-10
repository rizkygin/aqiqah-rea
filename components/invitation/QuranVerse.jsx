import { motion } from 'framer-motion';

export default function QuranVerse() {
  return (
    <section className="py-24 px-6 md:px-[10vw] relative">
      {/* Islamic geometric divider top */}
      <div className="flex items-center justify-center gap-4 mb-14">
        <div className="flex-1 h-[0.5px] max-w-24" style={{ background: '#E197AB' }} />
        <IslamicStar size={20} />
        <div className="w-12 h-[0.5px]" style={{ background: '#E197AB' }} />
        <IslamicStar size={28} />
        <div className="w-12 h-[0.5px]" style={{ background: '#E197AB' }} />
        <IslamicStar size={20} />
        <div className="flex-1 h-[0.5px] max-w-24" style={{ background: '#E197AB' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Bismillah */}
        <p className="font-amiri text-2xl md:text-3xl mb-8 leading-loose" style={{ color: '#C07A8E', fontFamily: "'Amiri', serif", direction: 'rtl' }}>
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        {/* Arabic verse - Al-Furqan 74 */}
        <div
          className="rounded-3xl px-8 py-10 mb-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,245,247,0.95) 0%, rgba(253,221,230,0.5) 100%)',
            border: '0.5px solid rgba(225,151,171,0.3)',
          }}
        >
          {/* Corner ornaments */}
          <CornerOrnament className="absolute top-4 left-4 opacity-30" />
          <CornerOrnament className="absolute top-4 right-4 opacity-30 rotate-90" />
          <CornerOrnament className="absolute bottom-4 left-4 opacity-30 -rotate-90" />
          <CornerOrnament className="absolute bottom-4 right-4 opacity-30 rotate-180" />

          <p
            className="text-2xl md:text-3xl lg:text-4xl leading-loose mb-6"
            style={{ fontFamily: "'Amiri', serif", color: '#4A2C2C', direction: 'rtl', lineHeight: '2.2' }}
          >
            رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا
          </p>

          <div className="w-12 h-[0.5px] mx-auto mb-4" style={{ background: '#E197AB' }} />

          <p className="font-inter text-sm md:text-base text-muted-foreground leading-relaxed italic mb-3">
            "Our Lord, grant us from among our wives and offspring comfort to our eyes
            and make us an example for the righteous."
          </p>

          <p className="font-inter text-xs tracking-[0.2em] uppercase" style={{ color: '#C07A8E' }}>
            Surah Al-Furqan • Ayah 74
          </p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-cormorant italic text-lg md:text-xl text-muted-foreground"
        >
          May little Rearunika be the comfort of our eyes, a blessing in this world and the next.
        </motion.p>
      </motion.div>

      {/* Islamic geometric divider bottom */}
      <div className="flex items-center justify-center gap-4 mt-14">
        <div className="flex-1 h-[0.5px] max-w-24" style={{ background: '#E197AB' }} />
        <IslamicStar size={20} />
        <div className="w-12 h-[0.5px]" style={{ background: '#E197AB' }} />
        <IslamicStar size={28} />
        <div className="w-12 h-[0.5px]" style={{ background: '#E197AB' }} />
        <IslamicStar size={20} />
        <div className="flex-1 h-[0.5px] max-w-24" style={{ background: '#E197AB' }} />
      </div>
    </section>
  );
}

function IslamicStar({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2 L13.5 8.5 L20 7 L15.5 12 L20 17 L13.5 15.5 L12 22 L10.5 15.5 L4 17 L8.5 12 L4 7 L10.5 8.5 Z"
        fill="#E197AB"
        opacity="0.7"
      />
    </svg>
  );
}

function CornerOrnament({ className }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M2 2 L14 2 L14 4 L4 4 L4 14 L2 14 Z" fill="#E197AB" />
      <path d="M8 8 L16 8 L16 16 L8 16 Z" fill="none" stroke="#E197AB" strokeWidth="0.5" />
      <circle cx="8" cy="8" r="2" fill="#E197AB" opacity="0.5" />
    </svg>
  );
}