import React from 'react';
import { Meta } from '@storybook/react';
import { CommandPalette } from './CommandPalette';

export default {
  title: 'Components/CommandPalette',
  component: CommandPalette,
  parameters: {
    docs: {
      description: {
        component: 'A searchable command interface using keyboard shortcuts.',
      },
    },
  },  
} as Meta;

export const Default = () => (
  <div>
    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
      Press <kbd className="rounded border px-1 text-xs">⌘</kbd>+<kbd className="rounded border px-1 text-xs">K</kbd> or <kbd className="rounded border px-1 text-xs">Ctrl</kbd>+<kbd className="rounded border px-1 text-xs">K</kbd> to open the Command Palette.
    </p>
    <CommandPalette />
  </div>
);
