import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export type RouteTransitionType = 
  | 'fade' 
  | 'slide-up' 
  | 'slide-down' 
  | 'slide-left' 
  | 'slide-right' 
  | 'scale';

interface RouteTransitionProps {
  children: ReactNode;
  type?: RouteTransitionType;
  duration?: number;
  className?: string;
}

const transitions = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  'slide-up': {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  },
  'slide-down': {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  },
  'slide-left': {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  },
  'slide-right': {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },
};

export function RouteTransition({
  children,
  type = 'fade',
  duration = 0.4,
  className = '',
}: RouteTransitionProps) {
  const location = useLocation();
  const [key, setKey] = useState(location.pathname);
  
  useEffect(() => {
    setKey(location.pathname);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={transitions[type]}
        transition={{ 
          duration, 
          type: type === 'scale' || type.includes('slide') ? 'spring' : 'tween',
          stiffness: 100,
          damping: 15
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 