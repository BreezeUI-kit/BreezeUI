// src/components/ui/popover/Popover.stories.tsx
import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from './Popover';
import Button from '../../Button';

export default {
  title: 'UI/Popover',
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: 'A floating panel triggered by a reference element.',
      },
    },
  },  
};

export const Default = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button>Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      <p>This is a popover with some content inside.</p>
    </PopoverContent>
  </Popover>
);

export const WithForm = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button>Open Form Popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      <form className="space-y-4">
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            className="border-input bg-background focus:ring-ring mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2"
            placeholder="you@example.com"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </PopoverContent>
  </Popover>
);
