import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A draggable slider for numeric range input.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

// ✅ Story Component: Default
const DefaultSlider = () => {
  const [value, setValue] = useState(50);
  return (
    <div className="w-64">
      <label
        htmlFor="slider-default"
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        Default Slider
      </label>
      <Slider
        id="slider-default"
        aria-labelledby="slider-default-label"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultSlider />,
};

// ✅ Story Component: Disabled
const DisabledSlider = () => {
  const [value, setValue] = useState(25);
  return (
    <div className="w-64">
      <label
        htmlFor="slider-disabled"
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        Disabled Slider
      </label>
      <Slider
        id="slider-disabled"
        aria-labelledby="slider-disabled-label"
        value={value}
        onChange={setValue}
        disabled
      />
    </div>
  );
};

export const Disabled: Story = {
  render: () => <DisabledSlider />,
};

// ✅ Story Component: Stepped
const SteppedSlider = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="w-64">
      <label
        htmlFor="slider-stepped"
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        Stepped Slider (10s)
      </label>
      <Slider
        id="slider-stepped"
        aria-labelledby="slider-stepped-label"
        value={value}
        onChange={setValue}
        step={10}
        min={0}
        max={100}
      />
    </div>
  );
};

export const Stepped: Story = {
  render: () => <SteppedSlider />,
};

// ✅ Story Component: Vertical
const VerticalSlider = () => {
  const [value, setValue] = useState(70);
  return (
    <div className="flex h-48 flex-col items-center justify-center">
      <label
        htmlFor="slider-vertical"
        className="mb-2 text-sm font-medium text-gray-700"
      >
        Vertical Slider
      </label>
      <Slider
        id="slider-vertical"
        aria-labelledby="slider-vertical-label"
        orientation="vertical"
        value={value}
        onChange={setValue}
        min={0}
        max={100}
      />
    </div>
  );
};

export const Vertical: Story = {
  render: () => <VerticalSlider />,
};
