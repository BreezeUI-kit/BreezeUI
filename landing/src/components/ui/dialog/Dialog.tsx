import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '../../../lib/utils';

/**
 * Dialog is the root component used to manage open/close state.
 * Wraps Radix's DialogRoot.
 */
const Dialog = DialogPrimitive.Root;

/**
 * DialogTrigger opens the dialog when interacted with.
 */
const DialogTrigger = DialogPrimitive.Trigger;

/**
 * DialogContent is the modal body. Contains backdrop, content, and close button.
 * @param props - React component props
 */
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const titleId = React.useId();
  const descriptionId = React.useId();

  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
      <DialogPrimitive.Content
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
        <DialogPrimitive.Title id={titleId} className="text-lg font-semibold">
          Title
        </DialogPrimitive.Title>
        <DialogPrimitive.Description
          id={descriptionId}
          className="text-muted-foreground text-sm"
        >
          Description
        </DialogPrimitive.Description>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold', className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

/**
 * DialogClose closes the dialog.
 */
const DialogClose = DialogPrimitive.Close;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
