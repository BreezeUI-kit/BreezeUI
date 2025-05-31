// src/components/ui/checkbox/Checkbox.stories.tsx
import { Checkbox } from './Checkbox';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
  parameters: {
    docs: {
      description: {
        component: 'A toggleable checkbox component for boolean inputs.',
      },
    },
  },  
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Accept Terms and Conditions',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Subscribed to newsletter',
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Select All',
    indeterminate: true,
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
    checked: false,
  },
};
