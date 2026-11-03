import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'neutral' | 'outline' | 'glow';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
  icon,
}) => {
  const baseClasses = 'inline-flex items-center font-medium transition-colors rounded-full';
  
  const sizeClasses = size === 'sm' 
    ? 'text-xs px-2.5 py-0.5 gap-1.5' 
    : 'text-xs md:text-sm px-3.5 py-1 gap-2';

  const variantClasses = {
    blue: 'bg-[#168BFF]/15 text-[#4DB8FF] border border-[#168BFF]/35 shadow-[0_0_10px_rgba(22,139,255,0.15)]',
    neutral: 'bg-[#0D1424] text-[#A5B4CC] border border-[#1B2A47]',
    outline: 'bg-transparent text-[#A5B4CC] border border-[#1B2A47] hover:border-[#168BFF]/40 hover:text-[#F5F8FF]',
    glow: 'bg-[#101B30] text-[#F5F8FF] border border-[#168BFF]/50 shadow-[0_0_15px_rgba(22,139,255,0.25)]',
  }[variant];

  return (
    <span className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
