import React from 'react';
import { useState, useRef } from 'react';
import { usePortal } from '../../hooks/usePortal';
import { createPortal } from 'react-dom';
import { usePosition } from '../../hooks/usePosition';

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: { label: string; onClick: () => void }[];
}

/**
 * DropdownMenu shows a list of actions when trigger is clicked.
 *
 * @param trigger Button or element to trigger menu.
 * @param items Array of label and onClick items.
 */
export function DropdownMenu({ trigger, items }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const portal = usePortal('breezeui-dropdowns');
  const style = usePosition(triggerRef, open);

  return (
    <div className="inline-block">
      <button ref={triggerRef} onClick={() => setOpen(!open)}>
        {trigger}
      </button>
      {open &&
        createPortal(
          <div
            className="z-50 w-48 rounded border bg-white shadow dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            style={style}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:text-black"
                onClick={() => {
                  item.onClick();
                  setOpen(false);
                }}
              >
                {item.label}
              </div>
            ))}
          </div>,
          portal
        )}
    </div>
  );
}
