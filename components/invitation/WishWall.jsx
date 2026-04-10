import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';

function WishBubble({ wish, index }) {
  const offsets = [
    'translate-x-4', 'translate-x-0', '-translate-x-4',
    'translate-x-8', '-translate-x-2', 'translate-x-6',
  ];
  const offset = offsets[index % offsets.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`${offset} max-w-xs`}
    >
      <div
        className="px-5 py-4 rounded-2xl backdrop-blur-sm"
        style={{
          background: 'linear-gradient(135deg, rgba(255,245,247,0.8) 0%, rgba(248,200,220,0.3) 100%)',
          border: '1px solid rgba(248,200,220,0.4)',
        }}
      >
        <p className="font-inter text-sm text-foreground leading-relaxed">"{wish.message}"</p>
        <p className="font-cormorant italic text-xs text-muted-foreground mt-2">— {wish.author_name}</p>
      </div>
    </motion.div>
  );
}

export default function WishWall() {
  const [wishes, setWishes] = useState([]);
  const [form, setForm] = useState({ author_name: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWishes();
  }, []);

  const loadWishes = async () => {
    const data = await base44.entities.Wish.list('-created_date', 20);
    setWishes(data);
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.author_name.trim() || !form.message.trim()) return;
    setSubmitting(true);
    await base44.entities.Wish.create(form);
    setForm({ author_name: '', message: '' });
    setSubmitting(false);
    await loadWishes();
  };

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
        Wishes for Rearunika
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="font-inter text-sm text-center text-muted-foreground mb-12 max-w-md mx-auto"
      >
        Plant a seed of love with your warm words
      </motion.p>

      {/* Submit form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto mb-16 p-6 rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255,245,247,0.9) 0%, rgba(253,221,230,0.5) 100%)',
          boxShadow: '0 8px 32px rgba(225, 151, 171, 0.1)',
        }}
      >
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            required
            value={form.author_name}
            onChange={(e) => setForm({ ...form, author_name: e.target.value })}
            className="flex-1 px-4 py-3 rounded-xl border font-inter text-sm text-foreground bg-white/60 border-border focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Your name"
          />
        </div>
        <div className="flex gap-3">
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={2}
            className="flex-1 px-4 py-3 rounded-xl border font-inter text-sm text-foreground bg-white/60 border-border focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            placeholder="Write a wish for Rearunika..."
          />
          <button
            type="submit"
            disabled={submitting}
            className="self-end w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-105 disabled:opacity-60 shrink-0"
            style={{ background: 'linear-gradient(135deg, #E197AB 0%, #D4849A 100%)' }}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </motion.form>

      {/* Wish bubbles */}
      {loading ? (
        <div className="text-center">
          <div className="w-6 h-6 border-2 border-border border-t-primary rounded-full animate-spin mx-auto" />
        </div>
      ) : wishes.length > 0 ? (
        <div className="max-w-2xl mx-auto space-y-4 flex flex-col items-center">
          {wishes.map((w, i) => (
            <WishBubble key={w.id} wish={w} index={i} />
          ))}
        </div>
      ) : (
        <p className="text-center font-inter text-sm text-muted-foreground">
          Be the first to send your wishes ✨
        </p>
      )}
    </section>
  );
}