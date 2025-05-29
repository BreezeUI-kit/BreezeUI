// src/components/ui/toggle/Toggle.tsx

import React, { InputHTMLAttributes, useId } from 'react';

interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
}

export const Toggle = ({ label, helperText, error, ...props }: ToggleProps) => {
  const id = useId();
  const helperId = `${id}-helper`;

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="inline-flex items-center space-x-2">
        <input
          type="checkbox"
          role="switch"
          id={id}
          aria-checked={props.checked}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={helperText ? helperId : undefined}
          className="peer sr-only"
          {...props}
        />
        <div className="w-10 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full relative transition">
          <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 peer-checked:translate-x-4 transform transition" />
        </div>
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
