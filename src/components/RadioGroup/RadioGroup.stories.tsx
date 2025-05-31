import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A set of radio buttons for selecting a single option.',
      },
    },
  },
  
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
];

// ✅ Story 1
const BasicComponent = () => {
  const [value, setValue] = useState('b');
  return (
    <RadioGroup
      label="Choose one"
      options={options}
      value={value}
      onChange={setValue}
    />
  );
};

export const Basic: Story = {
  render: () => <BasicComponent />,
};

// ✅ Story 2
const HorizontalComponent = () => {
  const [value, setValue] = useState('a');
  return (
    <RadioGroup
      label="Horizontal layout"
      direction="horizontal"
      options={options}
      value={value}
      onChange={setValue}
    />
  );
};

export const Horizontal: Story = {
  render: () => <HorizontalComponent />,
};

// ✅ Story 3
const DisabledComponent = () => {
  const [value, setValue] = useState('a');
  return (
    <RadioGroup
      label="Disabled group"
      options={options}
      value={value}
      onChange={setValue}
      disabled
    />
  );
};

export const Disabled: Story = {
  render: () => <DisabledComponent />,
};
