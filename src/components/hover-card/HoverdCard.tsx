import { ReactNode, useRef, useState } from 'react';
import { usePortal } from '../../hooks/usePortal';
import { createPortal } from 'react-dom';
import { usePosition } from '../../hooks/usePosition';

interface HoverCardProps {
  trigger: ReactNode;
  content: ReactNode;
}

/**
 * HoverCard displays a content box on hover over the trigger element.
 *
 * @param trigger The hoverable element.
 * @param content Content displayed in the hover card.
 */
export function HoverCard({ trigger, content }: HoverCardProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const portal = usePortal('breezeui-hovercards');
  const style = usePosition(ref, open);

  return (
    <div
      ref={ref}
      className="inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {trigger}
      {open &&
        createPortal(
          <div
            className="z-50 w-fit max-w-sm overflow-hidden rounded border bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            style={style}
          >
            {content}
          </div>,
          portal
        )}
    </div>
  );
}
