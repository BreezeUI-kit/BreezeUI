import * as React from "react";
import { cn } from "../../../lib/utils";

export interface TabsProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

/**
 * Tabs component for switching between views.
 *
 * @param tabs - List of tabs with unique `id` and `label`.
 * @param activeTab - Currently active tab `id`.
 * @param onTabChange - Callback fired when a new tab is selected.
 */
export function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  return (
    <div className="flex border-b border-gray-200 dark:border-gray-700">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "px-4 py-2 text-sm font-medium",
            activeTab === tab.id
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          )}
          aria-current={activeTab === tab.id ? "page" : undefined}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}