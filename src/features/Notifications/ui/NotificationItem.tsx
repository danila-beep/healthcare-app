"use client";
import { formatDistanceToNow } from 'date-fns';
import { INotification } from '@/shared/stores/user/user.types';
import { cn } from '@/shared/lib/utils/styles/cn';

interface NotificationItemProps {
  notification: INotification;
  onMarkAsRead: (id: string) => void;
}

export const NotificationItem = ({ notification, onMarkAsRead }: NotificationItemProps) => {
  const timeAgo = formatDistanceToNow(notification.createdAt, { addSuffix: true });

  return (
    <div
      className={cn(
        'p-4 border-b border-gray-100 cursor-pointer',
        'transition-colors duration-200 hover:bg-gray-50',
        !notification.isRead && 'bg-blue-50'
      )}
      onClick={() => onMarkAsRead(notification.id || '')}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-mulish text-sm font-semibold text-gray-900">
            {notification.title}
          </h3>
          <p className="font-mulish text-sm text-gray-600 mt-1">
            {notification.message}
          </p>
          <span className="font-mulish text-xs text-gray-400 mt-2 block">
            {timeAgo}
          </span>
        </div>
        {!notification.isRead && (
          <div className="w-2 h-2 rounded-full bg-blue-500" />
        )}
      </div>
    </div>
  );
}; 