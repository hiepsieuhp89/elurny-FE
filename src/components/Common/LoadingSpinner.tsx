import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
  color?: string;
}

const LoadingSpinner = ({ 
  size = 40, 
  className = '',
  color = 'border-mainColorV1'
}: LoadingSpinnerProps) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <motion.div
        className={`rounded-full border-t-2 border-b-2 ${color}`}
        style={{
          width: size,
          height: size,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};

export default LoadingSpinner; 