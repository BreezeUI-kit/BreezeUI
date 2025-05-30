import React from "react";
import { SliderProps } from "./Slider.types";
import { cn } from "@/lib/utils";

/**
 * Slider component using Radix primitives.
 * Supports horizontal range selection with custom styles.
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
}) => {
  const isVertical = orientation === "vertical";

  return (
    <div
      className={cn(
        "flex gap-2",
        isVertical ? "flex-col items-center h-48" : "flex-col"
      )}
    >
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        type="range"
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
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        role="slider"
        style={
          isVertical
            ? {
                writingMode: "vertical-lr",
                direction: "rtl",
              }
            : undefined
        }
      />
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {value}
      </div>
    </div>
  );
};
