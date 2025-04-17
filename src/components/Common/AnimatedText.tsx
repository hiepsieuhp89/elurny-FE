import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimatedTextType = 
  | 'chars' 
  | 'words' 
  | 'lines'
  | 'highlight'
  | 'typing';

interface AnimatedTextProps {
  text: string;
  type?: AnimatedTextType;
  className?: string;
  textClassName?: string;
  staggerChildren?: number;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export function AnimatedText({
  text,
  type = 'words',
  className = '',
  textClassName = '',
  staggerChildren = 0.05,
  delay = 0,
  tag = 'p',
}: AnimatedTextProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
      },
    },
  };

  const highlightVariants = {
    hidden: { backgroundSize: '0% 100%' },
    visible: { 
      backgroundSize: '100% 100%',
      transition: {
        duration: 0.8,
        delay: delay
      }
    }
  };

  if (type === 'chars') {
    const chars = text.split('');
    const Component = motion[tag];

    return (
      <Component
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {chars.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={itemVariants}
            className={`inline-block ${textClassName}`}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </Component>
    );
  }

  if (type === 'words') {
    const words = text.split(' ');
    const Component = motion[tag];

    return (
      <Component
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="inline-block">
            <motion.span
              variants={itemVariants}
              className={`inline-block ${textClassName}`}
            >
              {word}
            </motion.span>
            {index !== words.length - 1 && '\u00A0'}
          </span>
        ))}
      </Component>
    );
  }

  if (type === 'lines') {
    const lines = text.split('\n');
    const Component = motion[tag];

    return (
      <Component
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {lines.map((line, index) => (
          <motion.div key={`${line}-${index}`} variants={itemVariants} className={textClassName}>
            {line}
          </motion.div>
        ))}
      </Component>
    );
  }

  // Highlight text animation
  if (type === 'highlight') {
    const Component = motion[tag];
    
    return (
      <Component
        initial="hidden"
        animate="visible"
        variants={highlightVariants}
        className={`inline-block bg-gradient-to-r from-mainColorV1 to-mainColorV1 bg-no-repeat bg-bottom bg-[length:0%_8px] ${className} ${textClassName}`}
      >
        {text}
      </Component>
    );
  }

  // Fallback to simple animation
  const Component = motion[tag];
  return (
    <Component
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`${className} ${textClassName}`}
    >
      {text}
    </Component>
  );
} 