import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { cn } from '../../../lib/utils';

/**
 * AlertDialog is the root component for managing modal open/close state.
 * Wraps Radix's AlertDialogRoot.
 */
const AlertDialog = AlertDialogPrimitive.Root;

/**
 * Opens the alert dialog.
 */
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

/**
 * The container for modal content.
 * @param props - React component props
 */
const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const titleId = React.useId();
  const descriptionId = React.useId();

  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
      <AlertDialogPrimitive.Content
        ref={ref}
        className={cn(
          'fixed z-50 grid w-full max-w-lg scale-100 gap-4 border border-border bg-background p-6 shadow-lg',
          'animate-in fade-in-90 slide-in-from-top-10 sm:rounded-lg',
          'top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2',
          className
        )}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        {...props}
      >
        <AlertDialogPrimitive.Title id={titleId} className="text-lg font-semibold">
          Are you sure?
        </AlertDialogPrimitive.Title>
        <AlertDialogPrimitive.Description id={descriptionId} className="text-sm text-muted-foreground">
          This action cannot be undone.
        </AlertDialogPrimitive.Description>
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  );
});
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

/**
 * AlertDialogTitle displays the heading of the alert dialog.
 */
const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold', className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

/**
 * AlertDialogDescription provides additional information.
 */
const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

  /**
 * Handles dialog closing.
 */
const AlertDialogCancel = AlertDialogPrimitive.Cancel;

/**
 * Handles dialog confirmation actions.
 */
const AlertDialogAction = AlertDialogPrimitive.Action;

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
};
