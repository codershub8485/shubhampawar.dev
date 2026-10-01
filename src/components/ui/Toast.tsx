import { AnimatePresence, motion } from 'motion/react';
import { Check } from 'lucide-react';
import { EASE } from '@/lib/motion';

export function Toast({ message }: { message: string | null }) {
  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-[120] flex justify-center px-4"
    >
      <AnimatePresence>
        {message && (
          <motion.div
            key={message}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="glass flex items-center gap-2 rounded-full px-5 py-3 text-sm"
          >
            <Check className="h-4 w-4 text-ok" aria-hidden />
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
