// src/components/ui/dialog/Dialog.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './Dialog';
import Button from '../../Button';

const meta: Meta<typeof Dialog> = {
  title: 'UI/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: 'A modal dialog component for user interaction or alerts.',
      },
    },
  },  
};
export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Default Dialog</DialogTitle>
        <DialogDescription>This is a basic dialog component.</DialogDescription>
        <div className="mt-4 flex justify-end">
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Form Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Submit Info</DialogTitle>
        <DialogDescription>
          Fill out the form below to continue.
        </DialogDescription>
        <form className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded border p-2"
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded border p-2"
          />
          <div className="flex justify-end gap-2">
            <DialogClose asChild>
              <Button variant="ghost">Cancel</Button>
            </DialogClose>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  ),
};
