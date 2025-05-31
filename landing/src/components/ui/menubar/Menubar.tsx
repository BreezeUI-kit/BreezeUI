/* global alert */

import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';

/**
 * MenubarDemo provides an accessible top menu with keyboard support.
 */
export function MenubarDemo() {
  return (
    <MenubarPrimitive.Root className="flex gap-4 bg-zinc-100 px-4 py-2 dark:bg-zinc-900">
      <MenubarPrimitive.Menu>
        <MenubarPrimitive.Trigger asChild>
          <button
            type="button"
            className="text-sm font-medium text-zinc-800 outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
          >
            File
          </button>
        </MenubarPrimitive.Trigger>

        <MenubarPrimitive.Portal>
          <MenubarPrimitive.Content
            align="start"
            sideOffset={4}
            className="z-50 min-w-[160px] rounded-md border bg-white p-1 shadow-md dark:border-zinc-700 dark:bg-zinc-800"
          >
            <MenubarPrimitive.Item
              onSelect={() => alert('New File')}
              className="cursor-pointer select-none rounded-sm px-2 py-1.5 text-sm text-zinc-700 outline-none hover:bg-zinc-100 focus:bg-zinc-100 dark:text-white dark:hover:bg-zinc-700 dark:focus:bg-zinc-700"
            >
              New File
            </MenubarPrimitive.Item>

            <MenubarPrimitive.Item
              onSelect={() => alert('Save')}
              className="cursor-pointer select-none rounded-sm px-2 py-1.5 text-sm text-zinc-700 outline-none hover:bg-zinc-100 focus:bg-zinc-100 dark:text-white dark:hover:bg-zinc-700 dark:focus:bg-zinc-700"
            >
              Save
            </MenubarPrimitive.Item>
          </MenubarPrimitive.Content>
        </MenubarPrimitive.Portal>
      </MenubarPrimitive.Menu>
    </MenubarPrimitive.Root>
  );
}
