"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  containerId?: string;
}

export const Portal = ({ children, containerId = "portal-root" }: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Создаем контейнер, если он не существует
    let container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement("div");
      container.id = containerId;
      document.body.appendChild(container);
    }

    return () => {
      // Удаляем контейнер при размонтировании, если он пустой
      const container = document.getElementById(containerId);
      if (container && !container.childNodes.length) {
        document.body.removeChild(container);
      }
    };
  }, [containerId]);

  if (!mounted) return null;

  const container = document.getElementById(containerId);
  if (!container) return null;

  return createPortal(children, container);
}; 