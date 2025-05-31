import React from 'react';
import { Meta } from '@storybook/react';
import { MenubarDemo } from './Menubar';

export default {
  title: 'Components/Menubar',
  component: MenubarDemo,
  parameters: {
    docs: {
      description: {
        component: 'A horizontal menubar for navigation or actions. Use arrow keys and Enter/Space for keyboard support.',
      },
    },
  },
} as Meta;

export const Default = () => (
  <div className="max-w-md">
    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
      Use arrow keys to navigate, and press <kbd className="rounded border px-1 text-xs">Enter</kbd> or <kbd className="rounded border px-1 text-xs">Space</kbd> to activate a menu item.
    </p>
    <MenubarDemo />
  </div>
);
