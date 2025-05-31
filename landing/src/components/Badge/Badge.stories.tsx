import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Components/Badge',
  parameters: {
    docs: {
      description: {
        component: 'A small badge for status, notification counts, or tags.',
      },
    },
  },  
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    text: 'New',
    variant: 'default',
  },
};

export const Success: Story = {
  args: {
    text: 'Active',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    text: 'Pending',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    text: 'Failed',
    variant: 'error',
  },
};
