import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'aria-required-children',
            enabled: true,
          },
        ],
      },
    },
    docs: {
      description: {
        component: 'A custom select dropdown for choosing one item from a list.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
];

// ✅ Story Component: Basic
const BasicSelect = () => {
  const [value, setValue] = useState('b');
  return (
    <Select
      label="Basic Select"
      options={options}
      value={value}
      onChange={setValue}
    />
  );
};

export const Basic: Story = {
  render: () => <BasicSelect />,
};

// ✅ Story Component: With Placeholder
const WithPlaceholderSelect = () => {
  const [value, setValue] = useState('');
  return (
    <Select
      label="Select with Placeholder"
      options={options}
      placeholder="Choose an option..."
      value={value}
      onChange={setValue}
    />
  );
};

export const WithPlaceholder: Story = {
  render: () => <WithPlaceholderSelect />,
};

// ✅ Story Component: Disabled
const DisabledSelect = () => {
  const [value, setValue] = useState('a');
  return (
    <Select
      label="Disabled Select"
      options={options}
      value={value}
      onChange={setValue}
      disabled
    />
  );
};

export const Disabled: Story = {
  render: () => <DisabledSelect />,
};
