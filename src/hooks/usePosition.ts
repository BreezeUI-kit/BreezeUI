/* global window */

import React from 'react';
import { useEffect, useState } from 'react';

export function usePosition(ref: React.RefObject<HTMLElement>, open: boolean) {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (open && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setStyle({
        position: 'absolute',
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [open, ref]);

  return style;
}
