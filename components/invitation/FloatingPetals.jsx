import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const PETAL_COUNT = 12;

function Petal({ delay, duration, startX, size, opacity }) {
    return (
        <motion.div
            className="fixed pointer-events-none z-0"
            initial={{ x: `${startX}vw`, y: -20, rotate: 0, opacity: 0 }}
            animate={{
                y: '110vh',
                rotate: [0, 180, 360],
                opacity: [0, opacity, opacity, 0],
                x: [`${startX}vw`, `${startX + 10}vw`, `${startX - 5}vw`, `${startX + 8}vw`],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: 'linear',
            }}
        >
            <div
                className="rounded-full"
                style={{
                    width: size,
                    height: size * 1.3,
                    background: `radial-gradient(ellipse at 30% 30%, #F8C8DC, #FDDDE6)`,
                    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                    filter: 'blur(1px)',
                }}
            />
        </motion.div>
    );
}

export default function FloatingPetals() {
    const [petals] = useState(() =>
        Array.from({ length: PETAL_COUNT }, (_, i) => ({
            id: i,
            delay: Math.random() * 8,
            duration: 12 + Math.random() * 10,
            startX: Math.random() * 90,
            size: 8 + Math.random() * 14,
            opacity: 0.3 + Math.random() * 0.4,
        }))
    );

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {petals.map((p) => (
                <Petal key={p.id} {...p} />
            ))}
        </div>
    );
}