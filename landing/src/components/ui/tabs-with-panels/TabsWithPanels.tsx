import * as React from 'react';
import { cn } from '../../../lib/utils';

export interface TabsWithPanelsProps {
  tabs: { id: string; label: string; content: React.ReactNode }[];
  initialTabId?: string;
}

/**
 * A11y-enhanced Tabs component with associated content panels.
 *
 * - Uses ARIA roles: `tablist`, `tab`, `tabpanel`
 * - Supports keyboard navigation: Left/Right arrow keys
 * - Auto-focuses selected tab
 */
export function TabsWithPanels({ tabs, initialTabId }: TabsWithPanelsProps) {
  const [activeTab, setActiveTab] = React.useState(initialTabId || tabs[0].id);
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const currentIndex = tabs.findIndex((t) => t.id === activeTab);
    if (e.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[nextIndex].id);
      tabRefs.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      setActiveTab(tabs[prevIndex].id);
      tabRefs.current[prevIndex]?.focus();
    }
  };

  return (
    <div>
      <div
        className="flex border-b border-gray-200 dark:border-gray-700"
        role="tablist"
        aria-label="Tabs"
        onKeyDown={handleKeyDown}
      >
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            ref={(el) => (tabRefs.current[idx] = el)}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'px-4 py-2 text-sm font-medium focus:outline-none',
              activeTab === tab.id
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            )}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            tabIndex={activeTab === tab.id ? 0 : -1}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={activeTab !== tab.id}
          className="mt-4"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
