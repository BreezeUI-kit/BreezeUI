// src/components/ui/toggle/Toggle.stories.tsx

import React, { useState } from 'react';
import { Toggle } from './Toggle';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toggle> = {
  title: 'Form/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A small on/off toggle switch component.',
      },
    },
  },
  
};

export default meta;

type Story = StoryObj<typeof Toggle>;

// Example using a wrapper component to manage state
const ToggleTemplate = () => {
  const [enabled, setEnabled] = useState(false);
  return <Toggle checked={enabled} onChange={() => setEnabled(!enabled)} />;
};

export const Default: Story = {
  render: () => <ToggleTemplate />,
};

export const Checked: Story = {
  render: () => <Toggle checked={true} onChange={() => {}} />,
};

export const Disabled: Story = {
  render: () => <Toggle checked={false} onChange={() => {}} disabled />,
};
