"use client";
import { observer } from "mobx-react-lite";
import { useState, useRef, useEffect } from "react";
import { useStore } from "@/app/store/StoreContext";
import { NotificationDropdown } from "./NotificationListModal";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";
export const NotificationButton = observer(() => {
  const [isOpen, setIsOpen] = useState(false);
  const { notificationStore } = useStore();
  const { unreadCount } = notificationStore;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 rounded-2xl bg-white shadow-md cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105"
      >
        <Image src="/icons/Notification.svg" alt="Notification" width={24} height={24} />
        {unreadCount > 0 && (
          <span className={cn(
            "absolute -top-1 -right-1",
            "flex items-center justify-center",
            "w-5 h-5 text-xs text-white",
            "bg-red-500 rounded-full"
          )}>
            {unreadCount}
          </span>
        )}
      </button>

      <NotificationDropdown
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}); 