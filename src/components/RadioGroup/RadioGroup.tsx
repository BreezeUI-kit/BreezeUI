import React from "react";
import { RadioGroupProps } from "./RadioGroup.types";
import { cn } from "@/lib/utils";

/**
 * RadioGroup component using Radix.
 * Useful for grouped radio inputs and controlled selections.
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  value,
  onChange,
  name = "radio-group",
  disabled = false,
  direction = "vertical",
}) => {
  const layoutClass = direction === "horizontal" ? "flex flex-wrap gap-4" : "space-y-2";

  return (
    <fieldset className={layoutClass} disabled={disabled}>
      {label && (
        <legend className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </legend>
      )}
      {options.map((opt) => (
        <label
          key={opt.value}
          className={cn(
            "flex items-center gap-2 cursor-pointer",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={opt.value === value}
            onChange={() => onChange(opt.value)}
            disabled={disabled}
            className="accent-blue-600 dark:accent-blue-400"
          />
          <span className="text-sm text-gray-800 dark:text-gray-200">
            {opt.label}
          </span>
        </label>
      ))}
    </fieldset>
  );
};
