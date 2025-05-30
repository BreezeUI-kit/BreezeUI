interface ErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function Error({ className, ...props }: ErrorProps) {
  return <p className={`text-xs text-red-500 ${className}`} {...props} />;
}