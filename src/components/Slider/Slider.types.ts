export interface SliderProps {
  /** Optional id for input (automatically generated if not provided) */
  id?: string;

  /** Visible label text */
  label?: string;

  /** Current value of the slider */
  value: number;

  /** Callback when the value changes */
  onChange: (value: number) => void;

  /** Min range value */
  min?: number;

  /** Max range value */
  max?: number;

  /** Step size */
  step?: number;

  /** Disabled state */
  disabled?: boolean;

  /** Orientation of the slider */
  orientation?: 'horizontal' | 'vertical';
}
