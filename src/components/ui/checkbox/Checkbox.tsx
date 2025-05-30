// src/components/ui/checkbox/Checkbox.tsx

import React, { InputHTMLAttributes, useEffect, useId, useRef } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  indeterminate?: boolean;
}

/**
 * Checkbox component built with Radix and styled with Tailwind.
 * @param props - React component props extending from CheckboxPrimitive.Checkbox
 */
export const Checkbox = ({
  label,
  helperText,
  error,
  indeterminate,
  ...props
}: CheckboxProps) => {
  const id = useId();
  const helperId = `${id}-helper`;
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="inline-flex items-center space-x-2">
        <input
          type="checkbox"
          id={id}
          ref={ref}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={helperText ? helperId : undefined}
          className="form-checkbox h-4 w-4 text-blue-600"
          {...props}
        />
        {label && <span className="text-sm text-foreground">{label}</span>}
      </label>
      {helperText && (
        <p
          id={helperId}
          className={`text-xs ${
            error ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};
