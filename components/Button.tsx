import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  type = 'button'
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:scale-[1.02] active:scale-[0.98]";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-600 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/25 focus:ring-brand-500",
    secondary: "border-transparent text-slate-900 dark:text-white bg-brand-100 dark:bg-white/10 hover:bg-brand-200 dark:hover:bg-white/20 focus:ring-brand-500",
    outline: "border-brand-600 dark:border-brand-400 text-brand-600 dark:text-brand-400 bg-transparent hover:bg-brand-50 dark:hover:bg-brand-900/20 focus:ring-brand-500",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;