import * as React from "react";
import { cn } from "../../../lib/utils";

/**
 * Props for the Pagination component.
 */
export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

/**
 * Renders a pagination control with numbered page buttons.
 *
 * Highlights the current page and allows navigating to other pages.
 *
 * @param totalPages - Total number of pages.
 * @param currentPage - The current active page.
 * @param onPageChange - Callback triggered when a page is clicked.
 */
export function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
  return (
    <nav className="flex items-center space-x-2" aria-label="Pagination">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "px-3 py-1 rounded text-sm",
            page === currentPage
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-white"
          )}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}
    </nav>
  );
}