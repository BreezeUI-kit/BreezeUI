import React, { useId } from "react";
import { SliderProps } from "./Slider.types";
import { cn } from "@/lib/utils";

/**
 * Slider component with accessible label support.
 *
 * @param props - SliderProps including label, value, min/max, orientation, etc.
 */
export const Slider: React.FC<SliderProps> = ({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  orientation = "horizontal",
  id, // allow custom ID
}) => {
  const internalId = useId();
  const sliderId = id ?? `slider-${internalId}`;
  const labelId = `${sliderId}-label`;
  const isVertical = orientation === "vertical";

  return (
    <div
      className={cn(
        "flex gap-2",
        isVertical ? "flex-col items-center h-48" : "flex-col"
      )}
    >
      {label && (
        <label
          htmlFor={sliderId}
          id={labelId}
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      <input
        type="range"
        id={sliderId}
        aria-labelledby={label ? labelId : undefined}
        aria-label={label ? undefined : "Slider input"}
        value={value}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        className={cn(
          "accent-blue-600 dark:accent-blue-400",
          "disabled:opacity-50",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          "bg-gray-200 dark:bg-gray-700 rounded-lg cursor-pointer",
          isVertical ? "h-48 w-2" : "w-full h-2"
        )}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={
          isVertical
            ? {
                writingMode: "vertical-lr",
                direction: "rtl",
              }
            : undefined
        }
      />

      <div className="text-sm text-gray-500 dark:text-gray-400">{value}</div>
    </div>
  );
};
