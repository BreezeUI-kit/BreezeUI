import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import { FaUser } from 'react-icons/fa';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
  parameters: {
    docs: {
      description: {
        component: 'A flexible container used to group related content and actions.',
      },
    },
  },  
};
export default meta;

export const Default: StoryObj<typeof Card> = {
  args: {
    title: 'Revenue',
    value: '$14,203',
  },
};

export const WithIcon: StoryObj<typeof Card> = {
  args: {
    title: 'Users',
    value: '1,024',
    icon: <FaUser />,
    description: 'Active users this week',
  },
};
