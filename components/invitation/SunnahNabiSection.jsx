import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function SunnahSection() {
    return (
        <section className="py-16 px-4 text-center">
            <motion.div
                className="max-w-md mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >

                <p className="font-body text-md text-muted-foreground italic leading-relaxed mb-6">
                    "كُلُّ غُلاَمٍ رَهِينَةٌ بِعَقِيقَتِهِ تُذْبَحُ عَنْهُ يَوْمَ سَابِعِهِ وَيُحْلَقُ وَيُسَمَّى"
                </p>
                <p className="font-body text-xs text-muted-foreground mb-8">
                    “Setiap anak tergadaikan dengan aqiqahnya, disembelihkan untuknya pada hari ketujuhnya, digundul rambutnya dan diberi nama.” (HR. Abu Daud no. 2838, An Nasai no. 4220, Ibnu Majah nol. 3165, Ahmad 5: 12. Syaikh Al Albani mengatakan bahwa hadits ini shahih)— HR. Tirmidzi
                </p>
                <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground">

                    <p className="font-body text-xs uppercase tracking-widest">
                        Semoga menjadi anak yang sholehah dan berbakti kepada orang tua
                    </p>
                </div>
            </motion.div>
        </section>
    );
}