import type { Meta, StoryObj } from '@storybook/react';
import Stat from './Stat';

const meta: Meta<typeof Stat> = {
  component: Stat,
  title: 'Components/Stat',
  parameters: {
    docs: {
      description: {
        component: 'Displays a key metric and its label, useful in dashboards.',
      },
    },
  },  
};
export default meta;

type Story = StoryObj<typeof Stat>;

export const Positive: Story = {
  args: {
    label: 'Revenue',
    value: '$15,230',
    change: '+4.2%',
    positive: true,
  },
};

export const Negative: Story = {
  args: {
    label: 'Churn Rate',
    value: '3.1%',
    change: '-1.2%',
    positive: false,
  },
};
