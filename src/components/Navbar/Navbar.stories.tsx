// src/components/Navbar/Navbar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'Components/Navbar',
};
export default meta;

export const Default: StoryObj<typeof Navbar> = {
  args: {},
};