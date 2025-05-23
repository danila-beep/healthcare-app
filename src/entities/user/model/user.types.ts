export type CalendarEvent = {
  date: Date;
  time?: string;
  title: string;
  description?: string;
  place?: string;
  type: 'appointment' | 'reminder' | 'task' | 'training' | 'other' | string;
  color?: string;
}

export type NotificationType = 'health' | 'system';

export interface INotification {
    id?: string;
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

export type HealthUnit =
  | "mg/dL"
  | "bpm"
  | "mmHg"
  | "°C"
  | "kg"
  | "cm"
  | "kg/m²"
  | "in";
export type HealthMetricType = "medical" | "measurement";

interface IHealthStatus {
  status: "normal" | "warning" | "critical";
  statusBgColor: string;
}

export interface HistoryEntry<T> {
  date: Date;
  value: T;
}

export interface IHealthMetric {
  name: string;
  type: HealthMetricType;

  title: string;
  description?: string;

  value: number | string;
  maxValue?: number;
  minValue?: number;
  unit?: HealthUnit;

  status?: IHealthStatus;

  icon?: string;
  graphImage?: string;

  mainColor?: string;
  secondaryColor?: string;

  history?: HistoryEntry<number | string>[];
  addedAt?: Date;
}

export interface HistoryEntry<T> {
  date: Date;
  value: T;
}

export interface IUser {
  id: string;
  name: string;
  age: number;
  gender: string;
  healthMetrics: IHealthMetric[];
  notifications: INotification[];
  events: CalendarEvent[];
}
