interface ErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * Error message text shown when form validation fails.
 * Uses higher contrast colors to meet WCAG guidelines.
 */
export function Error({ className = '', ...props }: ErrorProps) {
  return (
    <p
      className={`text-xs text-red-700 dark:text-red-400 ${className}`}
      {...props}
    />
  );
}
