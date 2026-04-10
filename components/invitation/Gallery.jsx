import { motion } from 'framer-motion';

const imgVariant = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: i * 0.15, duration: 0.8, ease: 'easeOut' },
  }),
};

const shapes = [
  '50% 50% 45% 55% / 55% 50% 50% 45%',
  '45% 55% 50% 50% / 50% 45% 55% 50%',
  '55% 45% 50% 50% / 45% 55% 45% 55%',
  '48% 52% 55% 45% / 52% 48% 52% 48%',
  '52% 48% 45% 55% / 48% 52% 48% 52%',
];

export default function Gallery({ images }) {
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
        Moments of Radiance
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="font-inter text-sm text-center text-muted-foreground mb-16 max-w-md mx-auto"
      >
        A glimpse into Rhea's first beautiful days
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {images.map((src, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imgVariant}
            className={`relative group ${i === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' : ''}`}
          >
            <div
              className="overflow-hidden w-full aspect-square md:aspect-auto shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
              style={{
                borderRadius: shapes[i % shapes.length],
                height: i === 0 ? '100%' : undefined,
                minHeight: i === 0 ? '300px' : '200px',
              }}
            >
              <img
                src={src}
                alt={`Rearunika gallery ${i + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Film grain overlay */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-multiply"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}