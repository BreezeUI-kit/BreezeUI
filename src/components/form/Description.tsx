interface DescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function Description({ className, ...props }: DescriptionProps) {
  return <p className={`text-xs text-gray-500 ${className}`} {...props} />;
}