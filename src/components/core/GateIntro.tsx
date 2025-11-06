"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface GateIntroProps {
  show: boolean;
  onSkip: () => void;
}

const GateIntro = ({ show, onSkip }: GateIntroProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 20 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-bistre"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative"
          >
            <svg width="200" height="200" viewBox="0 0 200 200">
              <motion.circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#a8763e"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke="#a8763e"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
              />
              <motion.circle
                cx="100"
                cy="100"
                r="40"
                fill="none"
                stroke="#a8763e"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
              />
            </svg>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.8, 1] }}
              transition={{ delay: 0.5, duration: 2 }}
              className="absolute inset-0 flex items-center justify-center text-center text-copper text-xl animate-flicker"
            >
              Enter
            </motion.p>
          </motion.div>

          <button
            onClick={onSkip}
            className="absolute top-8 right-8 text-white hover:text-amber-600 transition-colors"
            aria-label="Skip intro"
          >
            <X size={32} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GateIntro;
