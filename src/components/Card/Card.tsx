import React from 'react';

interface CardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
  description?: string;
}

const Card: React.FC<CardProps> = ({ title, value, icon, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">{title}</h2>
        {icon && <div className="text-2xl text-brand-500">{icon}</div>}
      </div>
      <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      )}
    </div>
  );
};

export default Card;