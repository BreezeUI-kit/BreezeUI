import { Tooltip } from './Tooltip';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Components/Tooltip',
  parameters: {
    docs: {
      description: {
        component: 'A hover-triggered tooltip for supplemental information.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="Tooltip Text">
      <button className="rounded bg-blue-600 px-4 py-2 text-white">
        Hover me
      </button>
    </Tooltip>
  ),
};

// ✅ 1. Long tooltip content (tests positioning + wrapping)
export const LongContent: Story = {
  render: () => (
    <Tooltip content="This is a much longer tooltip that gives additional context when you hover.">
      <span className="underline decoration-dotted cursor-help text-sm">
        Hover for help
      </span>
    </Tooltip>
  ),
};

// ✅ 2. Tooltip around an icon
export const IconTrigger: Story = {
  render: () => (
    <Tooltip content="Settings">
      <button className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-600 dark:text-gray-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 3a7 7 0 100 14 7 7 0 000-14zM2 10a8 8 0 1116 0A8 8 0 012 10z" />
        </svg>
      </button>
    </Tooltip>
  ),
};

// ✅ 3. Tooltip with JSX content
export const RichContent: Story = {
  render: () => (
    <Tooltip
      content={
        <div>
          <p className="font-semibold">Shortcuts</p>
          <ul className="text-xs">
            <li>⌘ + K — Command palette</li>
            <li>⌘ + S — Save</li>
          </ul>
        </div>
      }
    >
      <button className="rounded bg-gray-700 px-4 py-2 text-white">
        Hover for shortcuts
      </button>
    </Tooltip>
  ),
};
