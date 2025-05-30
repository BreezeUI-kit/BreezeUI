// src/components/ui/alert-dialog/AlertDialog.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from './AlertDialog';
import Button from '../../Button';

const meta: Meta<typeof AlertDialog> = {
  title: 'UI/AlertDialog',
  component: AlertDialog,
};
export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Confirmation: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Delete File</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. It will permanently delete your file.
        </AlertDialogDescription>
        <div className="flex justify-end gap-2 mt-4">
          <AlertDialogCancel asChild>
            <Button variant="ghost">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="destructive">Delete</Button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const DestructiveWithReason: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Remove Access</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Revoke Access?</AlertDialogTitle>
        <AlertDialogDescription>
          This will remove all permissions for this user. You can’t undo this.
        </AlertDialogDescription>
        <textarea
          className="w-full mt-4 rounded border p-2"
          placeholder="Add optional reason..."
        />
        <div className="flex justify-end gap-2 mt-4">
          <AlertDialogCancel asChild>
            <Button variant="ghost">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="destructive">Revoke</Button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
