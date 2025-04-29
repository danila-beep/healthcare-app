"use client";
import { makeAutoObservable } from "mobx";
import { IUser, IHealthMetric, INotification } from "./user.types";
import { userSample } from "@/entities/user/model/user.data";

const userLocalStorageKey = "user";

const isClient = typeof window !== "undefined";

class UsersStore {
  userData: IUser;

  constructor() {
    this.userData = userSample;
    makeAutoObservable(this);
  }

  // LocalStorage initialization only on client side
  // TODO: check how to make this work without hydration error
  private initializeStore = () => {
    try {
      if (isClient) {
        const storedUser = localStorage.getItem(userLocalStorageKey);
        if (storedUser) {
          this.userData = JSON.parse(storedUser);
        } else {
          this.userData = userSample;
          this.setUserToLocalStorage();
        }
      }
    } catch (error) {
      console.error('Failed to initialize store:', error);
      this.userData = userSample;
    }
  };

  // Getters
  public getUserPersonalInfo = () => {
    if (!this.userData && isClient) {
      this.initializeStore();
    }
    return {
      name: this.userData.name,
      age: this.userData.age,
      gender: this.userData.gender,
    };
  };

  public getUserAllMetrics = () => {
    if (!this.userData && isClient) {
      this.initializeStore();
    }
    return this.userData.healthMetrics;
  };

  public getUserMetricByName = (metricName: string) => {
    if (!this.userData && isClient) {
      this.initializeStore();
    }
    return this.userData.healthMetrics.find(
      (metric) => metric.name === metricName
    );
  };

  public getUserMedicalMetrics = () => {
    if (!this.userData && isClient) {
      this.initializeStore();
    }
    return this.userData.healthMetrics.filter(
      (metric) => metric.type === "medical"
    );
  };

  public getUserMeasurementMetrics = () => {
    if (!this.userData && isClient) {
      this.initializeStore();
    }
    return this.userData.healthMetrics.filter(
      (metric) => metric.type === "measurement"
    );
  };

  public getUserNotifications = () => {
    if (!this.userData && isClient) {
      this.initializeStore();
    }
    return this.userData.notifications;
  };

  public getUserUnreadNotifications = () => {
    if (!this.userData && isClient) {
      this.initializeStore();
    }
    return this.userData.notifications.filter(
      (notification) => !notification.isRead
    );
  };

  // Actions / Setters
  public setUserPersonalInfo = (info: {
    name: string;
    age: number;
    gender: string;
  }) => {
    if (!this.userData && isClient) {
      this.initializeStore();
    }
    this.userData.name = info.name;
    this.userData.age = info.age;
    this.userData.gender = info.gender;
    this.setUserToLocalStorage();
  };

  // Actions / Adders
  public addMetric = (metric: IHealthMetric) => {
    if (!this.userData && isClient) {
      this.initializeStore();
    }
    this.userData.healthMetrics.push(metric);
    this.setUserToLocalStorage();
  };

  public addNotification = (notification: INotification) => {
    if (!this.userData && isClient) {
      this.initializeStore();
    }
    const notificationToAdd = notification.id 
      ? notification 
      : { ...notification, id: this.generateNotificationId() };
    
    this.userData.notifications.push(notificationToAdd);
    this.setUserToLocalStorage();
  };

  // Actions / Removers
  public removeMetric = (metricName: string) => {
    if (!this.userData && isClient) {
      this.initializeStore();
    }
    this.userData.healthMetrics = this.userData.healthMetrics.filter(
      (metric) => metric.name !== metricName
    );
    this.setUserToLocalStorage();
  };

  public removeNotification = (notificationId: string) => {
    if (!this.userData && isClient) {
      this.initializeStore();
    }
    this.userData.notifications = this.userData.notifications.filter(
      (notification) => notification.id !== notificationId
    );
    this.setUserToLocalStorage();
  };

  // Actions / Updaters
  public updateMetric = (metricName: string, newValue: number | string) => {
    if (!this.userData && isClient) {
      this.initializeStore();
    }
    const metric = this.userData.healthMetrics.find(
      (metric) => metric.name === metricName
    );
    if (metric) {
      metric.value = newValue;
      this.setUserToLocalStorage();
    }
  };

  public markAsRead = (notificationId: string) => {
    if (!this.userData && isClient) {
      this.initializeStore();
    }
    this.userData.notifications = this.userData.notifications.filter(
      (notification) => notification.id !== notificationId
    );
  };

  public markAllAsRead = () => {
    if (!this.userData && isClient) {
      this.initializeStore();
    }
    this.userData.notifications = this.userData.notifications.filter(
      (notification) => notification.isRead
    );
  };

  // Helpers
  private generateNotificationId = () => {
    return crypto.randomUUID();
  };

  private setUserToLocalStorage = () => {
    if (isClient) {
      try {
        localStorage.setItem(userLocalStorageKey, JSON.stringify(this.userData));
      } catch (error) {
        console.error('Failed to save user data to localStorage:', error);
      }
    }
  };

  // Метод для сброса данных к начальным значениям
  public resetToDefault = () => {
    this.userData = userSample;
    this.setUserToLocalStorage();
  };
}

export const usersStore = new UsersStore();
