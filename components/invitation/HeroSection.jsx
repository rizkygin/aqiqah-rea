'use client'
import { motion } from 'framer-motion';

const fadeBlur = {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 30 },
    visible: (i) => ({
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        transition: { delay: i * 0.2, duration: 1, ease: 'easeOut' },
    }),
};

export default function HeroSection({ heroImage }) {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 md:px-[10vw] py-20 relative overflow-hidden">
            {/* Decorative bg shapes */}
            <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-20" style={{ background: '#F8C8DC' }} />
            <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-15" style={{ background: '#E197AB' }} />

            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto w-full relative z-10">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="flex justify-center md:justify-start order-1 md:order-1"
                >
                    <div className="relative">
                        <div
                            className="w-72 h-96 md:w-80 md:h-[28rem] overflow-hidden shadow-2xl"
                            style={{ borderRadius: '45% 55%' }}
                        >
                            <img
                                src={heroImage}
                                alt="Baby Rearunika"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Soft glow behind */}
                        <div
                            className="absolute -inset-4 -z-10 opacity-40"
                            style={{
                                borderRadius: '45% 55% 40% 60% / 55% 45% 55% 45%',
                                background: 'radial-gradient(circle, #F8C8DC 0%, transparent 70%)',
                            }}
                        />
                    </div>
                </motion.div>

                {/* Text content */}
                <div className="order-2 md:order-2 text-center md:text-left">
                    <motion.p
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={fadeBlur}
                        className="text-sm tracking-[0.3em] uppercase font-inter text-muted-foreground mb-4"
                    >
                        Undangan Tasyakuran Aqiqah dan Tasmiyah
                    </motion.p>

                    <motion.p
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={fadeBlur}
                        className="font-inter text-base md:text-lg text-muted-foreground leading-relaxed mb-6"
                    >
                        Alhamdulillah anak kami telah lahir ke dunia dengan selamat tanpa kekurangan suatu apapun
                    </motion.p>

                    <motion.h1
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={fadeBlur}
                        className="font-cormorant italic font-light text-foreground leading-none mb-6"
                        style={{ fontSize: 'clamp(3rem, 8vw, 4rem)' }}
                    >
                        Rhea Arunika
                        <br />
                        Humaira
                    </motion.h1>

                    <motion.div
                        custom={3}
                        initial="hidden"
                        animate="visible"
                        variants={fadeBlur}
                    >
                        <div className="w-16 h-[0.5px] mx-auto md:mx-0 mb-6" style={{ background: '#E197AB' }} />
                        <p className="font-inter text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
                            Maka dari itu dengan suasana bahagia ini, kami bermaksud untuk melaksanakan syukuran Aqiqah dan
                            <span className="font-medium text-foreground text-muted-foreground bold"> untuk putri kami tercinta </span>
                            Rhea Arunika Humaira
                        </p>
                    </motion.div>

                    <motion.p
                        custom={4}
                        initial="hidden"
                        animate="visible"
                        variants={fadeBlur}
                        className="font-cormorant italic text-xl md:text-2xl mt-8 text-foreground/70"
                    >
                        "Kamu adalah alasan kami tersenyum dan selalu bersyukur"
                    </motion.p>
                </div>
            </div>
        </section>
    );
}