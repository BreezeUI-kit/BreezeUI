import React from "react";
import clsx from "clsx";

interface BadgeProps {
  text: string;
  color?: "default" | "success" | "warning" | "error";
}

const colorMap = {
  default: "bg-gray-100 text-gray-800",
  success: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  error: "bg-red-100 text-red-800",
};

/**
 * Badge component to highlight status or tags using contextual color coding.
 *
 * @param text - The label to be shown inside the badge.
 * @param color - The color style of the badge. Can be 'default', 'success', 'warning', or 'error'.
 */
const Badge: React.FC<BadgeProps> = ({
  text,
  color = "default",
}: BadgeProps) => {
  return (
    <span
      className={clsx(
        "px-2 py-1 text-sm rounded-full font-medium",
        colorMap[color],
      )}
    >
      {text}
    </span>
  );
};

Badge.displayName = "Badge";

export default Badge;
