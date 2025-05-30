import React, { useState, useRef, useEffect } from "react";
import { SelectProps } from "./Select.types";
import { cn } from "@/lib/utils";

/**
 * Select component built on top of Radix Select.
 * Handles dropdown interactions, keyboard nav, and option selection.
 */
export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = "select-options-list";

  const selectedOption = options.find((opt) => opt.value === value);

  const handleToggle = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setIsOpen(true);
      setHighlightedIndex(0);
      return;
    }

    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev + 1) % options.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev - 1 + options.length) % options.length);
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleSelect(options[highlightedIndex].value);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
    }
  };

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          buttonRef.current &&
          !buttonRef.current.contains(event.target as Node) &&
          listRef.current &&
          !listRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left w-64">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <button
        ref={buttonRef}
        type="button"
        className={cn(
          "w-full px-4 py-2 border rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-500",
          disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white dark:bg-gray-900"
        )}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listId}
        disabled={disabled}
      >
        {selectedOption?.label || placeholder}
      </button>

      {isOpen && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto focus:outline-none"
        >
          {options.map((opt, index) => {
            const isSelected = value === opt.value;
            const isHighlighted = highlightedIndex === index;

            return (
              <li
                key={opt.value}
                id={`select-option-${index}`}
                role="option"
                aria-selected={isSelected}
                className={cn(
                  "px-4 py-2 cursor-pointer",
                  isSelected && "bg-blue-100 dark:bg-blue-700 text-blue-900 dark:text-white",
                  isHighlighted && !isSelected && "bg-gray-100 dark:bg-gray-700"
                )}
                onClick={() => handleSelect(opt.value)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
