import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

type PageLoaderType = 'default' | 'overlay' | 'skeleton' | 'blur' | 'progress';

interface PageLoaderProps {
  type?: PageLoaderType;
  color?: string;
  isLoading: boolean;
  size?: number;
  text?: string;
  className?: string;
}

export function PageLoader({
  type = 'default',
  color = 'border-mainColorV1',
  isLoading,
  size = 50,
  text,
  className = '',
}: PageLoaderProps) {
  if (!isLoading) return null;

  if (type === 'overlay') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`fixed inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm z-50 ${className}`}
      >
        <LoadingSpinner size={size} color={color} />
        {text && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white font-medium"
          >
            {text}
          </motion.p>
        )}
      </motion.div>
    );
  }

  if (type === 'blur') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`absolute inset-0 flex items-center justify-center backdrop-blur-sm z-10 ${className}`}
      >
        <LoadingSpinner size={size} color={color} />
      </motion.div>
    );
  }

  if (type === 'progress') {
    return (
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className={`fixed top-0 left-0 h-1 bg-mainColorV1 z-50 ${className}`}
      />
    );
  }

  // Default
  return (
    <div className={`flex flex-col items-center justify-center w-full py-12 ${className}`}>
      <LoadingSpinner size={size} color={color} />
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-slate-500 font-medium"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
} 