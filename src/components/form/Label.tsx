import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

/**
 * Label for form fields.
 * Links to input via htmlFor prop.
 */
export function Label({ className, ...props }: LabelProps) {
  return <label className={`text-sm font-medium ${className}`} {...props} />;
}
