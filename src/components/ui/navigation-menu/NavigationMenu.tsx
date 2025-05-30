import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

/**
 * `NavigationMenu` provides a responsive dropdown or sidebar menu for primary
 * navigation across sections or pages in a dashboard UI.
 *
 * Supports:
 * - Mouse, keyboard, and touch interaction
 * - Arrow key navigation and Escape to close
 * - Semantic roles for accessibility (`navigation`, `link`, `menuitem`)
 *
 * Example:
 * ```tsx
 * <NavigationMenu>
 *   <NavigationMenuItem href="/dashboard">Dashboard</NavigationMenuItem>
 *   <NavigationMenuItem href="/settings">Settings</NavigationMenuItem>
 * </NavigationMenu>
 * ```
 *
 * @component
 */
export function NavigationMenuDemo() {
  return (
    <NavigationMenuPrimitive.Root className="relative z-10 flex justify-center">
      <NavigationMenuPrimitive.List className="flex gap-6 bg-zinc-100 p-4 dark:bg-zinc-900">
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link className="text-sm font-medium">Home</NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link className="text-sm font-medium">Docs</NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link className="text-sm font-medium">GitHub</NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  );
}