import React from 'react';

interface DescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * Description text shown below inputs.
 */
export function Description({ className, ...props }: DescriptionProps) {
  return <p className={`text-xs text-gray-500 ${className}`} {...props} />;
}
