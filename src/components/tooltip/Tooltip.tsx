import { ReactNode, useState, useRef } from 'react';
import { usePortal } from '../../hooks/usePortal';
import { createPortal } from 'react-dom';
import { usePosition } from '../../hooks/usePosition';

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
}

/**
 * Tooltip component shows floating content on hover.
 *
 * @param content Tooltip text or JSX to display.
 * @param children The element that triggers the tooltip.
 */
export function Tooltip({ content, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const portal = usePortal('breezeui-tooltips');
  const style = usePosition(targetRef, visible);

  return (
    <div
      ref={targetRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="inline-block"
    >
      {children}
      {visible &&
        createPortal(
          <div
            className="z-50 max-w-xs break-words rounded bg-gray-800 px-2 py-1 text-sm text-white shadow"
            style={style}
          >
            {content}
          </div>,
          portal
        )}
    </div>
  );
}
