// src/components/ui/textarea/Textarea.stories.tsx

import React from 'react';
import { Textarea } from './Textarea';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Textarea> = {
  title: 'Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Write your description here...',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Description',
    helperText: 'Max 500 characters',
    placeholder: 'Write your description here...',
  },
};

export const Error: Story = {
  args: {
    label: 'Description',
    helperText: 'This field is required.',
    error: true,
    placeholder: 'Write your description here...',
  },
};

export const Success: Story = {
  args: {
    label: 'Description',
    helperText: 'Looks good!',
    success: true,
    placeholder: 'Write your description here...',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Description',
    placeholder: 'Disabled textarea',
    disabled: true,
  },
};
