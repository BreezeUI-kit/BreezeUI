interface ErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {}

/**
 * Error message text shown when form validation fails.
 */
export function Error({ className, ...props }: ErrorProps) {
  return <p className={`text-xs text-red-500 ${className}`} {...props} />;
}