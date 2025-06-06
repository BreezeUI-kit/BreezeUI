import React from 'react';

interface CardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
  description?: string;
}

/**
 * Card component for displaying dashboard metrics or summary data.
 * Supports optional icons and description text for context.
 *
 * @param title - The main heading for the card.
 * @param value - The primary value or metric to show.
 * @param icon - Optional icon element to display on the card.
 * @param description - Optional secondary text to describe the value.
 */
const Card: React.FC<CardProps> = ({ title, value, icon, description }) => {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {title}
        </h2>
        {icon && <div className="text-2xl text-brand-500">{icon}</div>}
      </div>
      <p className="text-3xl font-bold text-gray-900 dark:text-white">
        {value}
      </p>
      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
};

Card.displayName = 'Card';

export default Card;
