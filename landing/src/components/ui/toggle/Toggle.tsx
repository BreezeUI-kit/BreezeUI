import React, { InputHTMLAttributes, useId } from 'react';
import { cn } from '@/lib/utils';

interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
}

/**
 * Toggle switch component with accessibility support.
 */
export const Toggle = ({ label, helperText, error, ...props }: ToggleProps) => {
  const id = useId();
  const helperId = `${id}-helper`;
  const labelId = `${id}-label`;

  return (
    <div className="flex flex-col space-y-1">
      <div className="inline-flex items-center space-x-2">
        <input
          type="checkbox"
          role="switch"
          id={id}
          aria-checked={props.checked}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={helperText ? helperId : undefined}
          aria-labelledby={label ? labelId : undefined}
          aria-label={
            !label ? props['aria-label'] || 'Toggle switch' : undefined
          }
          className="peer sr-only"
          {...props}
        />
        <label
          htmlFor={id}
          className="relative h-6 w-10 cursor-pointer rounded-full bg-gray-300 transition peer-checked:bg-blue-600"
        >
          <div className="absolute left-1 top-1 h-4 w-4 transform rounded-full bg-white transition peer-checked:translate-x-4" />
        </label>
        {label && (
          <span
            id={labelId}
            className="text-sm text-gray-800 dark:text-gray-200"
          >
            {label}
          </span>
        )}
      </div>
      {helperText && (
        <p
          id={helperId}
          className={cn(
            'text-xs',
            error
              ? 'text-red-600 dark:text-red-400'
              : 'text-gray-700 dark:text-gray-400'
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};
