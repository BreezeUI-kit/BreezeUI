/* global alert */
import { DropdownMenu } from './DropdownMenu';
import type { Meta, StoryObj } from '@storybook/react';
import { MoreVertical } from 'lucide-react';

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  title: 'Components/DropdownMenu',
  parameters: {
    docs: {
      description: {
        component: 'A menu triggered by a button with multiple actions.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <DropdownMenu
      trigger={
        <span className="rounded bg-gray-700 px-4 py-2 text-white">
          Open Menu
        </span>
      }
      items={[
        { label: 'Profile', onClick: () => alert('Profile clicked') },
        { label: 'Settings', onClick: () => alert('Settings clicked') },
        { label: 'Logout', onClick: () => alert('Logout clicked') },
      ]}
    />
  ),
};

export const IconTrigger: Story = {
  render: () => (
    <DropdownMenu
      trigger={
        <button
          aria-label="Open actions"
          className="rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <MoreVertical className="h-5 w-5 text-gray-700 dark:text-white" />
        </button>
      }
      items={[
        { label: 'Edit', onClick: () => alert('Edit clicked') },
        { label: 'Delete', onClick: () => alert('Delete clicked') },
      ]}
    />
  ),
};

export const EmptyItems: Story = {
  render: () => (
    <DropdownMenu
      trigger={
        <span className="rounded bg-gray-500 px-4 py-2 text-white">
          No Actions
        </span>
      }
      items={[]} // Empty list
    />
  ),
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark">
      <div className="bg-gray-900 p-4">
        <DropdownMenu
          trigger={
            <span className="rounded x-4 py-2 text-white">
              Dark Mode
            </span>
          }
          items={[
            { label: 'Night Mode', onClick: () => alert('Night Mode clicked') },
            { label: 'System Default', onClick: () => alert('System clicked') },
          ]}
        />
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
