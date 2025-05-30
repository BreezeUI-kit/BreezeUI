export interface RadioOption {
    label: string;
    value: string;
}
  
export interface RadioGroupProps {
  label?: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  name?: string;
  disabled?: boolean;
  direction?: "vertical" | "horizontal";
}
  
  