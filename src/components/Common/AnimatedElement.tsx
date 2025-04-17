import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationType = 
  | 'hover-scale' 
  | 'hover-lift' 
  | 'hover-glow' 
  | 'click-spring' 
  | 'pulse';

interface AnimatedElementProps {
  children: ReactNode;
  animationType?: AnimationType;
  isButton?: boolean;
  className?: string;
  onClick?: () => void;
}

export function AnimatedElement({
  children,
  animationType = 'hover-scale',
  isButton = false,
  className = '',
  onClick,
}: AnimatedElementProps) {
  // Basic animations
  if (animationType === 'hover-scale') {
    const props = {
      whileHover: { scale: 1.05 },
      whileTap: isButton ? { scale: 0.95 } : undefined,
      className,
      onClick
    };
    
    return isButton 
      ? <motion.button {...props}>{children}</motion.button>
      : <motion.div {...props}>{children}</motion.div>;
  }
  
  if (animationType === 'hover-lift') {
    const props = {
      whileHover: { y: -5 },
      whileTap: isButton ? { y: 0 } : undefined,
      className,
      onClick
    };
    
    return isButton 
      ? <motion.button {...props}>{children}</motion.button>
      : <motion.div {...props}>{children}</motion.div>;
  }
  
  if (animationType === 'hover-glow') {
    const props = {
      whileHover: { boxShadow: '0 0 8px rgba(255,255,255,0.5)' },
      whileTap: isButton ? { boxShadow: 'none' } : undefined,
      className,
      onClick
    };
    
    return isButton 
      ? <motion.button {...props}>{children}</motion.button>
      : <motion.div {...props}>{children}</motion.div>;
  }
  
  if (animationType === 'click-spring') {
    const props = {
      whileTap: isButton ? { 
        scale: 0.9, 
        transition: { 
          type: 'spring',
          stiffness: 300,
          damping: 10 
        }
      } : undefined,
      className,
      onClick
    };
    
    return isButton 
      ? <motion.button {...props}>{children}</motion.button>
      : <motion.div {...props}>{children}</motion.div>;
  }
  
  if (animationType === 'pulse') {
    const animateProps = {
      animate: { 
        scale: [1, 1.05, 1] 
      },
      className,
      onClick
    };
    
    const transitionProps = {
      transition: { 
        duration: 2, 
        repeat: Infinity,
        repeatType: "loop" as const
      }
    };
    
    return isButton 
      ? <motion.button {...animateProps} {...transitionProps}>{children}</motion.button>
      : <motion.div {...animateProps} {...transitionProps}>{children}</motion.div>;
  }
  
  // Default case
  return isButton 
    ? <motion.button className={className} onClick={onClick}>{children}</motion.button>
    : <motion.div className={className} onClick={onClick}>{children}</motion.div>;
} 