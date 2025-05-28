import React from "react";

interface StatProps {
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
}

/**
 * Stat component to display metrics with optional percentage change indicators.
 *
 * @param label - The label or title for the stat metric.
 * @param value - The primary value to display.
 * @param change - Optional text indicating percentage or value change.
 * @param positive - Whether the change is positive (true) or negative (false), used for styling.
 */
const Stat: React.FC<StatProps> = ({
  label,
  value,
  change,
  positive,
}: StatProps) => {
  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-gray-900">
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <p className="text-xl font-semibold text-gray-900 dark:text-white">
        {value}
      </p>
      {change && (
        <p
          className={`text-sm ${positive ? "text-green-600" : "text-red-600"}`}
        >
          {change}
        </p>
      )}
    </div>
  );
};

Stat.displayName = "Stat";

export default Stat;
