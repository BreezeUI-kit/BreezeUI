import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";

/**
 * `Menubar` provides a horizontal menu of selectable items, typically used
 * for actions, filters, or tool grouping in dashboard interfaces.
 *
 * Keyboard navigation is supported via:
 * - Arrow keys (← →) to move between items
 * - Enter or Space to activate
 *
 * Accessible via `role="menubar"` and `role="menuitem"` for each child item.
 *
 * Example:
 * ```tsx
 * <Menubar>
 *   <MenubarItem onSelect={() => doSomething()}>Settings</MenubarItem>
 *   <MenubarItem>Export</MenubarItem>
 * </Menubar>
 * ```
 *
 * @component
 */
export function MenubarDemo() {
  return (
    <MenubarPrimitive.Root className="flex gap-4 bg-zinc-100 px-4 py-2 dark:bg-zinc-900">
      <MenubarPrimitive.Menu>
        <MenubarPrimitive.Trigger className="text-sm font-medium">File</MenubarPrimitive.Trigger>
        <MenubarPrimitive.Portal>
          <MenubarPrimitive.Content className="z-50 rounded-md border bg-white p-2 shadow-md dark:bg-zinc-800 cursor-pointer">
            <MenubarPrimitive.Item onSelect={() => alert("New File")} className="cursor-pointer rounded-md px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800">
              New File
            </MenubarPrimitive.Item>
            <MenubarPrimitive.Item onSelect={() => alert("Save")} className="cursor-pointer rounded-md px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800">
              Save
            </MenubarPrimitive.Item>
          </MenubarPrimitive.Content>
        </MenubarPrimitive.Portal>
      </MenubarPrimitive.Menu>
    </MenubarPrimitive.Root>
  );
}