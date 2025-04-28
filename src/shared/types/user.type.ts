import { INotification } from "./notifications.type";
import { IHealthMetric } from "./health.type";

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
}