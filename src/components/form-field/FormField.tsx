import { ReactNode } from 'react';

interface FormFieldProps {
  label: string;
  htmlFor: string;
  children: ReactNode;
  description?: string;
  error?: string;
}

/**
 * FormField wrapper for labels and error/description messaging.
 * Follows WAI-ARIA practices.
 *
 * @param label - Text label for the form control.
 * @param htmlFor - ID of the associated input.
 * @param children - Form control element.
 * @param description - Optional description text.
 * @param error - Optional error message text.
 */
export function FormField({
  label,
  htmlFor,
  children,
  description,
  error,
}: FormFieldProps) {
  const describedBy = description ? `${htmlFor}-desc` : undefined;
  const errorId = error ? `${htmlFor}-error` : undefined;

  return (
    <div className="space-y-1">
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      {children}
      {description && (
        <p
          id={describedBy}
          className="text-xs text-gray-600 dark:text-gray-300"
        >
          {description}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-xs text-red-700 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
