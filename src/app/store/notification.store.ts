import { makeAutoObservable } from 'mobx';
import { INotification, Notifications } from '@/entities/Notification/model/types';
import { IHealthMetric } from '@/entities/HealthCard/model/types';

class NotificationStore {
  notifications: Notifications = [];

  constructor() {
    makeAutoObservable(this);
  }

  addNotification = (notification: INotification) => {
    this.notifications = [notification, ...this.notifications];
  };

  markAsRead = (id: string) => {
    this.notifications = this.notifications.map(notification =>
      notification.id === id ? { ...notification, isRead: true } : notification
    );
  };

  markAllAsRead = () => {
    this.notifications = this.notifications.map(notification => ({
      ...notification,
      isRead: true
    }));
  };

  removeNotification = (id: string) => {
    this.notifications = this.notifications.filter(
      notification => notification.id !== id
    );
  };

  get unreadCount() {
    return this.notifications.filter(notification => !notification.isRead).length;
  }

  createHealthChangeNotification = (
    metric: IHealthMetric,
    oldValue: number | string,
    newValue: number | string
  ) => {
    const notification: INotification = {
      id: crypto.randomUUID(),
      type: 'health_change',
      title: 'Health Metric Updated',
      message: `${metric.title} has been updated from ${oldValue} to ${newValue} ${metric.unit}`,
      createdAt: new Date(),
      isRead: false,
      metadata: {
        metricId: metric.id,
        oldValue,
        newValue,
        unit: metric.unit
      }
    };

    this.addNotification(notification);
  };
}

export const notificationStore = new NotificationStore(); 