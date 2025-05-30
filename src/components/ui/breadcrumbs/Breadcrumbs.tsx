import * as React from "react";
import { ChevronRight } from "lucide-react";

/**
 * A single breadcrumb item.
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * Props for the Breadcrumbs component.
 */
export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Renders a breadcrumb navigation trail.
 *
 * Shows each item separated by a chevron icon. Links are clickable if `href` is provided.
 *
 * @param items - Array of breadcrumb items with optional links.
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex text-sm text-gray-600 dark:text-gray-400" aria-label="Breadcrumb">
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center">
          {idx > 0 && <ChevronRight className="mx-2 h-4 w-4" />}
          {item.href ? (
            <a href={item.href} className="hover:underline text-blue-600 dark:text-blue-400">
              {item.label}
            </a>
          ) : (
            <span className="text-gray-700 dark:text-white">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}