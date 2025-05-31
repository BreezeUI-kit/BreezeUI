import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';

/**
 * NavigationMenu provides top-level links with keyboard and screen reader support.
 */
export function NavigationMenuDemo() {
  return (
    <NavigationMenuPrimitive.Root className="relative z-10 flex justify-center">
      <NavigationMenuPrimitive.List className="flex gap-6 bg-zinc-100 p-4 dark:bg-zinc-900">
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link asChild>
            <a
              href="#"
              className="text-sm font-medium text-zinc-800 outline-none transition hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-white"
            >
              Home
            </a>
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link asChild>
            <a
              href="#"
              className="text-sm font-medium text-zinc-800 outline-none transition hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-white"
            >
              Docs
            </a>
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link asChild>
            <a
              href="#"
              className="text-sm font-medium text-zinc-800 outline-none transition hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-white"
            >
              GitHub
            </a>
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  );
}
