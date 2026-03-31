import React from 'react';
import { cn } from '../../lib/utils';

export interface TonalStackProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly children?: React.ReactNode;
  readonly level?: 'dim' | 'base' | 'low' | 'high' | 'highest';
  readonly className?: string;
}

const levelMap = {
  dim: 'bg-surface-dim',
  base: 'bg-surface',
  low: 'bg-surface-container-low',
  high: 'bg-surface-container-high',
  highest: 'bg-surface-container-highest',
};

export const TonalStack: React.FC<TonalStackProps> = ({
  children,
  level = 'base',
  className = '',
  ...props
}) => {
  return (
    <div className={cn(levelMap[level], className)} {...props}>
      {children}
    </div>
  );
};
