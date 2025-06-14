import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface InputProps extends HTMLMotionProps<'input'> {
  label?: string;
  error?: string;
  variant?: 'default' | 'outline';
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  variant = 'default',
  className = '',
  ...props
}) => {
  const baseStyles = 'w-full px-4 py-2 rounded-lg transition-all duration-300';
  
  const variants = {
    default: 'bg-gray-800 border border-gray-700 text-white focus:border-cyan-500 focus:outline-none',
    outline: 'bg-transparent border-2 border-gray-700 text-white focus:border-cyan-500 focus:outline-none'
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      <motion.input
        whileFocus={{ scale: 1.01 }}
        className={`${baseStyles} ${variants[variant]} ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default Input; 