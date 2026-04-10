import { motion } from 'framer-motion';

const details = [
    { value: '51', unit: 'CM', label: 'Height' },
    { value: '3.2', unit: 'KG', label: 'Weight' },
    { value: '18:36', unit: '2026', label: 'Born' },
];

const circleVariant = {
    hidden: { opacity: 0, scale: 0.7, filter: 'blur(8px)' },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transition: { delay: 0.2 + i * 0.15, duration: 0.8, ease: 'easeOut' },
    }),
};

export default function BirthDetails() {
    return (
        <section className="py-24 px-6 md:px-[10vw] relative">
            {/* Thin separator line */}
            <div className="w-20 h-[0.5px] mx-auto mb-12" style={{ background: '#E197AB' }} />

            <motion.h2
                initial={{ opacity: 0, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-cormorant italic text-3xl md:text-4xl text-center text-foreground mb-4"
            >
                The Measure of Love
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-inter text-sm text-center text-muted-foreground mb-16 max-w-md mx-auto"
            >
                Precious details of the day our world changed forever
            </motion.p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {details.map((d, i) => (
                    <motion.div
                        key={d.label}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={circleVariant}
                        whileHover={{ scale: 1.08 }}
                        className="group cursor-default"
                    >
                        <div
                            className="w-36 h-36 md:w-44 md:h-44 rounded-full flex flex-col items-center justify-center relative transition-shadow duration-500 group-hover:shadow-xl"
                            style={{
                                background: 'linear-gradient(135deg, #FFF5F7 0%, #FDDDE6 50%, #F8C8DC 100%)',
                                boxShadow: '0 8px 32px rgba(225, 151, 171, 0.15)',
                            }}
                        >
                            <span className="font-cormorant font-light text-4xl md:text-5xl text-foreground leading-none">
                                {d.value}
                            </span>
                            <span className="font-inter text-xs tracking-[0.2em] text-muted-foreground mt-1">
                                {d.unit}
                            </span>
                            <span className="font-inter text-[10px] tracking-[0.15em] uppercase text-muted-foreground/60 mt-2">
                                {d.label}
                            </span>

                            {/* Hover glow */}
                            <div
                                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                                style={{
                                    background: 'radial-gradient(circle, rgba(248,200,220,0.4) 0%, transparent 70%)',
                                    transform: 'scale(1.2)',
                                }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}