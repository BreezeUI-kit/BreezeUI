import { useEffect, useRef, useState } from "react";

export function usePortal(id: string) {
  const rootElemRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`);
    const parentElem = existingParent || createRootElement(id);
    if (!existingParent) {
      document.body.appendChild(parentElem);
    }
    parentElem.appendChild(rootElemRef.current!);

    return () => {
      rootElemRef.current?.remove();
      if (parentElem.childNodes.length === 0) {
        parentElem.remove();
      }
    };
  }, [id]);

  function createRootElement(id: string) {
    const root = document.createElement("div");
    root.setAttribute("id", id);
    return root;
  }

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement("div");
    }
    return rootElemRef.current;
  }

  return getRootElem();
}