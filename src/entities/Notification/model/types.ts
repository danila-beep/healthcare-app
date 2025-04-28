export type NotificationType = 'health_change' | 'system' | 'appointment';

export interface INotification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  createdAt: Date;
  isRead: boolean;
  metadata?: {
    metricId?: string;
    oldValue?: number | string;
    newValue?: number | string;
    unit?: string;
  };
}

export type Notifications = INotification[]; 