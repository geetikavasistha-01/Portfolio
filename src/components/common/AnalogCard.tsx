import React from 'react';
import { cn } from '../../lib/utils';
import { motion, type HTMLMotionProps } from 'framer-motion';

export interface AnalogCardProps extends HTMLMotionProps<"div"> {
  readonly children?: React.ReactNode;
  readonly className?: string;
  readonly hoverTilt?: boolean;
}

export const AnalogCard: React.FC<AnalogCardProps> = ({
  children,
  className = '',
  hoverTilt = true,
  ...props
}) => {
  return (
    <motion.div 
      className={cn(
        "rounded-xl shadow-2xl overflow-hidden relative border border-secondary-fixed/5", 
        hoverTilt ? "hover:z-10 transition-transform duration-500" : "",
        className
      )}
      whileHover={hoverTilt ? { scale: 1.02, rotate: 0 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
};
