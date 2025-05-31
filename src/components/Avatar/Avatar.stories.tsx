import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Components/Avatar',
  parameters: {
    docs: {
      description: {
        component: 'A user profile avatar, optionally with a fallback.',
      },
    },
  },  
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Small: Story = {
  args: {
    src: 'https://i.pravatar.cc/100?img=3',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    src: 'https://i.pravatar.cc/100?img=5',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    src: 'https://i.pravatar.cc/100?img=8',
    size: 'lg',
  },
};
