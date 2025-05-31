import * as React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { cn } from '../../../lib/utils';

export interface PaginationWithControlsProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function PaginationWithControls({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationWithControlsProps) {
  const canGoBack = currentPage > 1;
  const canGoForward = currentPage < totalPages;

  return (
    <nav className="flex items-center space-x-2" aria-label="Pagination">
      <button
        onClick={() => onPageChange(1)}
        disabled={!canGoBack}
        className="rounded p-1 text-gray-500 hover:text-black dark:hover:text-white disabled:opacity-30"
        aria-label="First page"
      >
        <ChevronsLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!canGoBack}
        className="rounded p-1 text-gray-500 hover:text-black dark:hover:text-white disabled:opacity-30"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            'px-3 py-1 rounded text-sm',
            page === currentPage
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-white'
          )}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!canGoForward}
        className="rounded p-1 text-gray-500 hover:text-black dark:hover:text-white disabled:opacity-30"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={!canGoForward}
        className="rounded p-1 text-gray-500 hover:text-black dark:hover:text-white disabled:opacity-30"
        aria-label="Last page"
      >
        <ChevronsRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
