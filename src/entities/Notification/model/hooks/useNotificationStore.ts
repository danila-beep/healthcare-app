import { useStore } from '@/app/store/StoreContext';

export const useNotificationStore = () => {
  const { notificationStore } = useStore();

  return {
    notifications: notificationStore.notifications,
    unreadCount: notificationStore.unreadCount,
    markAsRead: notificationStore.markAsRead,
    markAllAsRead: notificationStore.markAllAsRead,
    addNotification: notificationStore.addNotification,
    createHealthChangeNotification: notificationStore.createHealthChangeNotification,
  };
};