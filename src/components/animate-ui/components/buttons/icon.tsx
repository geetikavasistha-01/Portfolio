'use client';

import * as React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface IconButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variants = {
  default: 'bg-[#d95f3b] text-white shadow-md hover:bg-[#d95f3b]/90',
  outline: 'border-2 border-[#d95f3b]/20 text-[#d95f3b] bg-transparent hover:bg-[#d95f3b]/5 hover:border-[#d95f3b]/40',
  ghost: 'text-[#d95f3b] bg-transparent hover:bg-[#d95f3b]/10 hover:shadow-sm',
};

const sizes = {
  sm: 'p-1.5 rounded-lg',
  md: 'p-2.5 rounded-xl',
  lg: 'p-4 rounded-2xl',
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          'flex items-center justify-center transition-all duration-300 group',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

IconButton.displayName = 'IconButton';
