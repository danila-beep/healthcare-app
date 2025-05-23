import { useStore } from "@/app/store/StoreContext";

export const useNotificationStore = () => {
  const { usersStore } = useStore();
  return {
    notifications: usersStore.getUserNotifications(),
    markAsRead: usersStore.markAsRead,
    markAllAsRead: usersStore.markAllAsRead,
    removeNotification: usersStore.removeNotification,
    unreadCount: usersStore.getUserUnreadNotifications().length,
    addNotification: usersStore.addNotification,
  };
};
