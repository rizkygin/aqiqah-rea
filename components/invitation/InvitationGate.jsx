import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

function EightPointStar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path d="M12 2L13.8 8.2L20 7L15.8 11.8L20 17L13.8 15.8L12 22L10.2 15.8L4 17L8.2 11.8L4 7L10.2 8.2Z" fill="#E197AB" opacity="0.8" />
    </svg>
  );
}

export default function InvitationGate({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    setTimeout(() => onOpen(), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Left door */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-between py-16"
        animate={opening ? { x: '-100%' } : { x: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        style={{
          background: 'linear-gradient(170deg, #FFF0F5 0%, #FDDDE6 50%, #F8C8DC 100%)',
          borderRight: '1px solid rgba(225,151,171,0.35)',
        }}
      >
        {/* Top ornament */}
        <div className="flex flex-col items-center gap-3 mt-4">
          <div className="w-[0.5px] h-12 mx-auto" style={{ background: 'rgba(225,151,171,0.5)' }} />
          <EightPointStar />
          <div className="w-[0.5px] h-6 mx-auto" style={{ background: 'rgba(225,151,171,0.5)' }} />
        </div>

        {/* Center text */}
        <div className="flex flex-col items-center gap-3 px-8 text-center">
          <p className="text-sm mb-1" style={{ fontFamily: "'Amiri', serif", color: '#C07A8E', direction: 'rtl' }}>بِسْمِ اللَّهِ</p>
          <p className="font-inter text-[10px] tracking-[0.35em] uppercase" style={{ color: '#C07A8E' }}>
            Undangan
          </p>
          <p className="font-cormorant italic font-light leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#4A2C2C' }}>
            Rearunika <br />Humairoh
          </p>
        </div>

        {/* Bottom ornament */}
        <div className="flex flex-col items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full" style={{ background: '#E197AB' }} />
          <div className="w-[0.5px] h-16 mx-auto" style={{ background: 'rgba(225,151,171,0.5)' }} />
        </div>

        {/* Door knob */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full z-10"
          style={{ background: '#E197AB', boxShadow: '0 2px 10px rgba(225,151,171,0.6)' }}
        />

        {/* Decorative panel inset */}
        <div
          className="absolute inset-8 rounded-2xl pointer-events-none"
          style={{ border: '0.5px solid rgba(225,151,171,0.25)' }}
        />
      </motion.div>

      {/* Right door */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full flex flex-col items-center justify-between py-16"
        animate={opening ? { x: '100%' } : { x: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        style={{
          background: 'linear-gradient(190deg, #FFF0F5 0%, #FDDDE6 50%, #F8C8DC 100%)',
          borderLeft: '1px solid rgba(225,151,171,0.35)',
        }}
      >
        {/* Top ornament */}
        <div className="flex flex-col items-center gap-3 mt-4">
          <div className="w-[0.5px] h-12 mx-auto" style={{ background: 'rgba(225,151,171,0.5)' }} />
          <EightPointStar />
          <div className="w-[0.5px] h-6 mx-auto" style={{ background: 'rgba(225,151,171,0.5)' }} />
        </div>

        {/* Center text */}
        <div className="flex flex-col items-center gap-3 px-8 text-center">
          <p className="font-cormorant italic font-light leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#4A2C2C' }}>
            Tasyakuran
          </p>
          <p className="font-inter text-[10px] tracking-[0.35em] uppercase" style={{ color: '#C07A8E' }}>
            Aqiqah dan Tasmiyah
          </p>
        </div>

        {/* Bottom ornament */}
        <div className="flex flex-col items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full" style={{ background: '#E197AB' }} />
          <div className="w-[0.5px] h-16 mx-auto" style={{ background: 'rgba(225,151,171,0.5)' }} />
        </div>

        {/* Door knob */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10"
          style={{ background: '#E197AB', boxShadow: '0 2px 10px rgba(225,151,171,0.6)' }}
        />

        {/* Decorative panel inset */}
        <div
          className="absolute inset-8 rounded-2xl pointer-events-none"
          style={{ border: '0.5px solid rgba(225,151,171,0.25)' }}
        />
      </motion.div>

      {/* Center CTA — only visible when not opening */}
      <AnimatePresence>
        {!opening && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-5 pointer-events-none z-10"
          >
            {/* Heart medallion */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center pointer-events-auto"
              style={{
                background: 'white',
                boxShadow: '0 4px 24px rgba(225,151,171,0.35)',
                border: '1px solid rgba(225,151,171,0.3)',
              }}
            >
              <Heart className="w-7 h-7" style={{ color: '#E197AB' }} fill="#E197AB" />
            </div>

            <motion.button
              onClick={handleOpen}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="pointer-events-auto px-10 py-4 rounded-full font-inter text-sm tracking-[0.2em] uppercase text-white"
              style={{
                background: 'linear-gradient(135deg, #E197AB 0%, #C87090 100%)',
                boxShadow: '0 8px 24px rgba(200,112,144,0.35)',
                minHeight: '44px',
              }}
            >
              Buka Undangan
            </motion.button>

            <p className="font-cormorant italic text-sm pointer-events-none" style={{ color: '#C07A8E' }}>
              A special moment awaits
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}