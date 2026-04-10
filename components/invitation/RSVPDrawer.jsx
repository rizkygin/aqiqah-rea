import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';

export default function RSVPDrawer({ open, onClose }) {
  const [form, setForm] = useState({ guest_name: '', number_of_guests: 1, message: '', attending: 'yes' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.RSVP.create(form);
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ guest_name: '', number_of_guests: 1, message: '', attending: 'yes' });
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md z-50 overflow-y-auto"
            style={{ background: '#FFF5F7' }}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-10">
                <h3 className="font-cormorant italic text-2xl text-foreground">Your Presence</h3>
                <button
                  onClick={handleClose}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: '#F8C8DC' }}
                >
                  <X className="w-4 h-4 text-foreground" />
                </button>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <Heart className="w-12 h-12 mx-auto mb-6" style={{ color: '#E197AB' }} />
                  <h4 className="font-cormorant italic text-2xl text-foreground mb-3">Thank You!</h4>
                  <p className="font-inter text-sm text-muted-foreground">
                    We are delighted to have you join our celebration. See you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="font-inter text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.guest_name}
                      onChange={(e) => setForm({ ...form, guest_name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border font-inter text-sm text-foreground bg-white/60 border-border focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2 block">
                      Will you attend?
                    </label>
                    <div className="flex gap-3">
                      {[
                        { val: 'yes', label: 'Joyfully, Yes!' },
                        { val: 'maybe', label: 'Perhaps' },
                        { val: 'no', label: 'Regretfully, No' },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          type="button"
                          onClick={() => setForm({ ...form, attending: opt.val })}
                          className="flex-1 py-2.5 rounded-xl font-inter text-xs transition-all duration-300 border"
                          style={{
                            background: form.attending === opt.val ? '#E197AB' : 'white',
                            color: form.attending === opt.val ? 'white' : '#4A2C2C',
                            borderColor: form.attending === opt.val ? '#E197AB' : '#F8C8DC',
                          }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-inter text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2 block">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={form.number_of_guests}
                      onChange={(e) => setForm({ ...form, number_of_guests: parseInt(e.target.value) || 1 })}
                      className="w-full px-4 py-3 rounded-xl border font-inter text-sm text-foreground bg-white/60 border-border focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2 block">
                      Message for Rearunika
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border font-inter text-sm text-foreground bg-white/60 border-border focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Write your warm wishes..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-full font-inter text-sm tracking-[0.15em] uppercase text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-60"
                    style={{ background: 'linear-gradient(135deg, #E197AB 0%, #D4849A 100%)' }}
                  >
                    {submitting ? 'Sending...' : 'Confirm RSVP'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}