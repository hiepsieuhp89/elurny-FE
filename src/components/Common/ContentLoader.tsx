import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ContentLoaderProps {
  children: ReactNode;
  isLoading: boolean;
  skeleton?: ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
}

export function ContentLoader({
  children,
  isLoading,
  skeleton,
  delay = 0,
  staggerChildren = 0.1,
  className = '',
}: ContentLoaderProps) {
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
        stiffness: 100,
        damping: 10,
      },
    },
  };

  if (isLoading && skeleton) {
    return <>{skeleton}</>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
} 