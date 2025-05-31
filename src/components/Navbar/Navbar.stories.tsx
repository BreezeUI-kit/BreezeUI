import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'Components/Navbar',
  parameters: {
    layout: 'fullscreen', // 💡 This removes the padding and constraint in Storybook
    docs: {
      description: {
        component: 'A responsive navigation bar typically used at the top of the page.',
      },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof Navbar> = {
  args: {},
};

export const WithCustomTitle: StoryObj<typeof Navbar> = {
  args: {
    title: 'My Dashboard',
  },
};

export const LongTitle: StoryObj<typeof Navbar> = {
  args: {
    title: 'Enterprise Monitoring & Analytics Platform - Admin Portal',
  },
};

export const DarkMode: StoryObj<typeof Navbar> = {
  args: {
    title: 'Dark BreezeUI',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
