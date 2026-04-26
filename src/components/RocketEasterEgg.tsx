import { motion, AnimatePresence } from 'motion/react';
import { Rocket } from 'lucide-react';

interface RocketEasterEggProps {
  isVisible: boolean;
  onComplete: () => void;
}

export default function RocketEasterEgg({ isVisible, onComplete }: RocketEasterEggProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -100, y: '100vh', rotate: 45 }}
          animate={{ 
            x: '120vw', 
            y: '-10vh',
            rotate: 45
          }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 2.5, 
            ease: "easeInOut"
          }}
          onAnimationComplete={onComplete}
          className="fixed z-50 pointer-events-none"
          style={{ bottom: 0, left: 0 }}
        >
          <div className="relative">
            <Rocket size={64} className="text-adopt-pink fill-adopt-pink" />
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ repeat: Infinity, duration: 0.2 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-12 bg-orange-500 blur-sm rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
