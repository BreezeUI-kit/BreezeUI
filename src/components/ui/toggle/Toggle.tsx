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
          aria-label={!label ? props['aria-label'] || 'Toggle switch' : undefined}
          className="peer sr-only"
          {...props}
        />
        <label
          htmlFor={id}
          className="w-10 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full relative transition cursor-pointer"
        >
          <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 peer-checked:translate-x-4 transform transition" />
        </label>
        {label && (
          <span id={labelId} className="text-sm text-gray-800 dark:text-gray-200">
            {label}
          </span>
        )}
      </div>
      {helperText && (
        <p
          id={helperId}
          className={cn(
            'text-xs',
            error ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-400'
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};
