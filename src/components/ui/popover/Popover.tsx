// src/components/ui/popover/Popover.tsx
import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '../../../lib/utils';

/**
 * Popover is the root container that manages the open/close state.
 *
 * Wrap your `PopoverTrigger` and `PopoverContent` within this component.
 */
const Popover = PopoverPrimitive.Root;

/**
 * PopoverTrigger is the element that toggles the popover.
 *
 * Should typically be a button. It includes `aria-haspopup="dialog"` by default for accessibility.
 */
const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({ ...props }, ref) => (
  <PopoverPrimitive.Trigger
    ref={ref}
    aria-haspopup="dialog"
    {...props}
  />
));
PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName;

/**
 * PopoverContent displays the floating panel anchored to the trigger.
 *
 * Use the `className` prop to customize styling.
 *
 * @param props - Props passed to the Radix Popover.Content
 * @param ref - Forwarded ref
 */
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
  const id = props.id ?? React.useId();

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        id={id}
        className={cn(
          'z-50 w-72 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
