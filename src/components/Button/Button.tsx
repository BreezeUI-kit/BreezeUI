import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'destructive' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Button component with support for multiple styles and sizes.
 *
 * @param children - The content of the button.
 * @param variant - The style of the button: 'primary', 'secondary', or 'outline'.
 * @param size - The size of the button: 'sm', 'md', or 'lg'.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const baseStyles = 'rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-400',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
    ghost: 'bg-transparent hover:bg-accent hover:text-accent-foreground',
  };

  return (
    <button
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';
export default Button;  