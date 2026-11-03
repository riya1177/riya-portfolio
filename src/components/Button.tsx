import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  icon,
  iconRight,
  isExternal = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  }[size];

  const variantClasses = {
    primary: 'bg-[#168BFF] text-[#F5F8FF] hover:bg-[#4DB8FF] shadow-[0_0_20px_rgba(22,139,255,0.35)] hover:shadow-[0_0_25px_rgba(77,184,255,0.5)] font-semibold',
    secondary: 'bg-[#101B30] text-[#F5F8FF] hover:bg-[#13223D] border border-[#1B2A47] hover:border-[#168BFF]/50 shadow-card',
    outline: 'bg-transparent text-[#4DB8FF] border border-[#168BFF]/50 hover:bg-[#168BFF]/10 hover:border-[#4DB8FF]',
    ghost: 'bg-transparent text-[#A5B4CC] hover:bg-[#0D1424] hover:text-[#F5F8FF]',
  }[variant];

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  );
};
