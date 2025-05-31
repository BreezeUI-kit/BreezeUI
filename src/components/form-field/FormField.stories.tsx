import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';
import { Input } from '../ui/input/Input';

const meta: Meta<typeof FormField> = {
  title: 'Components/FormField',
  component: FormField,
  parameters: {
    docs: {
      description: {
        component: 'A wrapper for form controls with label, error, and help text.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

/** Default example: label + error + description */
export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <FormField
        label="Email"
        htmlFor="email"
        description="We'll never share your email."
        error={value === '' ? 'This field is required' : undefined}
      >
        <Input
          id="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-invalid={value === '' ? 'true' : 'false'}
          aria-describedby="email-desc"
        />
      </FormField>
    );
  },
};

/** ✅ Minimal form: no description, no error */
export const Minimal: Story = {
  render: () => (
    <FormField label="Username" htmlFor="username">
      <Input id="username" placeholder="Enter your username" />
    </FormField>
  ),
};

/** ✅ Required field: with asterisk and validation */
export const Required: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const showError = value.trim() === '';
    return (
      <FormField
        label="Password *"
        htmlFor="password"
        error={showError ? 'Password is required' : undefined}
      >
        <Input
          id="password"
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-invalid={showError ? 'true' : 'false'}
        />
      </FormField>
    );
  },
};

/** Dark mode version */
export const DarkMode: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="dark bg-gray-900 p-4 dark:rounded-md">
        <FormField
          label="Name"
          htmlFor="name"
          description="Your full name"
          error={value === '' ? 'Please enter a name' : undefined}
        >
          <Input
            id="name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-invalid={value === '' ? 'true' : 'false'}
            className="dark:bg-gray-900 dark:border-white dark:text-white"
          />
        </FormField>
      </div>
    );
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
