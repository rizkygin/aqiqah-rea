import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function getTimeSince(birthDate) {
    const now = new Date();
    const birth = new Date(birthDate);
    const diff = Math.abs(now - birth);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

function CounterBox({ value, label }) {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-card border border-border/50 shadow-lg rounded-xl w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                <span className="font-heading text-3xl md:text-4xl text-primary font-bold">
                    {String(value).padStart(2, '0')}
                </span>
            </div>
            <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mt-2">
                {label}
            </p>
        </div>
    );
}

export default function BirthCountdown({ birthDate }) {
    const [time, setTime] = useState(getTimeSince(birthDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTimeSince(birthDate));
        }, 1000);
        return () => clearInterval(interval);
    }, [birthDate]);

    return (
        <div className="text-center">
            <p className="font-script text-xl text-primary mb-6">
                Umur Rhea Sekarang
            </p>
            <div className="flex justify-center gap-3 md:gap-6">
                <CounterBox value={time.days} label="Hari" />
                <div className="flex items-center text-2xl text-primary/40 font-heading mt-[-20px]">:</div>
                <CounterBox value={time.hours} label="Jam" />
                <div className="flex items-center text-2xl text-primary/40 font-heading mt-[-20px]">:</div>
                <CounterBox value={time.minutes} label="Menit" />
                <div className="flex items-center text-2xl text-primary/40 font-heading mt-[-20px]">:</div>
                <CounterBox value={time.seconds} label="Detik" />
            </div>
            <p className="font-script text-2xl text-primary mt-6">
                Masya Allah Tabarakallah
            </p>

        </div>
    );
}