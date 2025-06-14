import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'glass';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true
}) => {
  const baseStyles = 'rounded-lg border border-gray-700 p-6';
  
  const variants = {
    default: 'bg-black/40',
    gradient: 'bg-gradient-to-br from-gray-900 to-black',
    glass: 'bg-black/20 backdrop-blur-sm'
  };

  const hoverEffect = hover ? 'hover:border-cyan-500 transition-all duration-300' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={hover ? { scale: 1.02 } : undefined}
      className={`${baseStyles} ${variants[variant]} ${hoverEffect} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card; 