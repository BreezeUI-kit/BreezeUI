import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
  text: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'outline';
}

const variantMap = {
  default: 'bg-gray-100 text-gray-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
  outline: 'border border-gray-300 text-gray-800 dark:border-gray-600 dark:text-gray-100 bg-transparent'
};

/**
 * Badge component to highlight status or tags using contextual variant coding.
 *
 * @param text - The label to be shown inside the badge.
 * @param variant - The variant style of the badge. Can be 'default', 'success', 'warning', or 'error'.
 */
const Badge: React.FC<BadgeProps> = ({
  text,
  variant = 'default',
}: BadgeProps) => {
  return (
    <span
      className={clsx(
        'rounded-full px-2 py-1 text-sm font-medium',
        variantMap[variant]
      )}
    >
      {text}
    </span>
  );
};

Badge.displayName = 'Badge';

export default Badge;
