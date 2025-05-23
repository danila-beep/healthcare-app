"use client";
import { observer } from "mobx-react-lite";
import { NotificationItem } from "@/features/Notifications/ui/NotificationItem";
import { cn } from "@/shared/lib/utils/styles/cn";
import { useNotificationStore } from "@/features/Notifications/model/hooks/useNotificationStore";
import { INotification } from "@/shared/stores/user/user.types";

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationDropdown = observer(({ isOpen }: NotificationDropdownProps) => {
  const { notifications, markAsRead, markAllAsRead } = useNotificationStore();

  if (!isOpen) return null;

  return (
    <div className={cn(
      "absolute top-full right-0 mt-2",
      "min-w-100 bg-white rounded-2xl shadow-lg",
      "border border-gray-100",
      "z-50"
    )}>
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="font-mulish text-xl font-bold">Notifications</h2>
          {notifications.length > 0 && (
            <button
              onClick={markAllAsRead}
              className="font-mulish text-sm text-blue-500 hover:text-blue-600"
            >
              Mark all as read
            </button>
          )}
        </div>
      </div>

      <div className="max-h-[400px] overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8">
            <p className="font-mulish text-sm text-gray-500">
              No notifications yet
            </p>
          </div>
        ) : (
          notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification as INotification}
              onMarkAsRead={markAsRead}
            />
          ))
        )}
      </div>
    </div>
  );
}); 