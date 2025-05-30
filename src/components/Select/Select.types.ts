export interface SelectOption {
    label: string;
    value: string;
  }
  
  export interface SelectProps {
    label?: string;
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    placeholder?: string;
  }
  