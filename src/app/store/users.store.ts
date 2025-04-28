import { makeAutoObservable } from "mobx";
import { IUser } from "@/shared/types/user.type";
import { IHealthMetric } from "@/shared/types/health.type";
import { INotification } from "@/shared/types/notifications.type";

const userSample: IUser = {
  id: "1",
  name: "John Doe",
  age: 30,
  gender: "male",
  healthMetrics: [
    {
      name: "blood_sugar",
      title: "Blood Sugar",
      type: "medical",
      value: 90,
      maxValue: 200,
      minValue: 10,
      unit: "mg/dL",
      status: {
        status: "normal",
        statusBgColor: "#D6FFDD",
      },

      icon: "/icons/BloodShugar.svg",
      graphImage: "/illustrations/BloodSugarGraph.svg",
      mainColor: "#F8DEBD",
      secondaryColor: "#F8DEBD",

      history: [],
    },
    {
      name: "heart_rate",
      title: "Heart Rate",
      type: "medical",

      value: 90,
      maxValue: 200,
      minValue: 20,
      unit: "bpm",
      status: {
        status: "normal",
        statusBgColor: "#D6FFDD",
      },

      icon: "/icons/HeartRate.svg",
      graphImage: "/illustrations/HeartRateGraph.svg",
      mainColor: "#FBF0F3",
      secondaryColor: "#FBF0F3",

      history: [],
    },
    {
      name: "blood_pressure",
      title: "Blood Pressure",
      type: "medical",

      value: "120/80",
      unit: "mmHg",

      status: {
        status: "normal",
        statusBgColor: "#D6FFDD",
      },

      icon: "/icons/BloodPressure.svg",
      graphImage: "/illustrations/BloodPressureGraph.svg",
      mainColor: "#D0FBFF",
      secondaryColor: "#D0FBFF",

      history: [],
    },
    {
      name: "height",
      title: "Height",
      type: "measurement",

      value: 180,
      unit: "cm",
    },
    {
      name: "weight",
      title: "Weight",
      type: "measurement",

      value: 70,
      unit: "kg",
    },
    {
      name: "chest_size",
      title: "Chest Size",
      type: "measurement",

      value: 90,
      unit: "cm",
    },
    {
      name: "waist_size",
      title: "Waist Size",
      type: "measurement",

      value: 90,
      unit: "cm",
    },
    {
      name: "hip_size",
      title: "Hip Size",
      type: "measurement",

      value: 90,
      unit: "cm",
    },
  ],
  notifications: [],
};

const userLocalStorageKey = "user";

class UsersStore {
  private userData: IUser;

  constructor() {
    makeAutoObservable(this);
    this.userData = this.setUserData();
  }

  // Getters
  public getUserPersonalInfo() {
    return {
      name: this.userData.name,
      age: this.userData.age,
      gender: this.userData.gender,
    };
  }

  public getUserAllMetrics() {
    return this.userData.healthMetrics;
  }

  public getUserMedicalMetrics() {
    return this.userData.healthMetrics.filter(
      (metric) => metric.type === "medical"
    );
  }

  public getUserMeasurementMetrics() {
    return this.userData.healthMetrics.filter(
      (metric) => metric.type === "measurement"
    );
  }

  public getUserNotifications() {
    return this.userData.notifications;
  }

  // Actions / Setters
  public setUserPersonalInfo(info: {
    name: string;
    age: number;
    gender: string;
  }) {
    this.userData.name = info.name;
    this.userData.age = info.age;
    this.userData.gender = info.gender;
  }

  // Actions / Adders
  public addMedicalMetric(metric: IHealthMetric) {
    this.userData.healthMetrics.push({ ...metric, type: "medical" });

    this.setUserToLocalStorage();
  }

  public addMeasurementMetric(metric: IHealthMetric) {
    this.userData.healthMetrics.push({ ...metric, type: "measurement" });

    this.setUserToLocalStorage();
  }

  public addNotification(notification: INotification) {
    if (notification.id) {
      this.userData.notifications.push(notification);
    } else {
      this.userData.notifications.push({
        ...notification,
        id: this.generateNotificationId(),
      });
    }

    this.setUserToLocalStorage();
  }

  // Actions / Removers
  public removeNotification(notificationId: string) {
    this.userData.notifications = this.userData.notifications.filter(
      (notification) => notification.id !== notificationId
    );

    this.setUserToLocalStorage();
  }

  // Actions / Updaters
  public updateMedicalMetric(metricName: string, newValue: number) {
    const metric = this.userData.healthMetrics.find(
      (metric) => metric.name === metricName
    );
    if (metric) {
      metric.value = newValue;
    }

    this.setUserToLocalStorage();
  }

  public updateMeasurementMetric(metricName: string, newValue: number) {
    const metric = this.userData.healthMetrics.find(
      (metric) => metric.name === metricName
    );
    if (metric) {
      metric.value = newValue;
    }

    this.setUserToLocalStorage();
  }

  private generateNotificationId() {
    return crypto.randomUUID();
  }

  private setUserToLocalStorage(user?: IUser) {
    localStorage.setItem(
      userLocalStorageKey,
      JSON.stringify(user ? user : this.userData)
    );
  }

  private getUserFromLocalStorage(): IUser | undefined {
    if (!localStorage || !localStorage.getItem(userLocalStorageKey))
      return undefined;
    return JSON.parse(localStorage.getItem(userLocalStorageKey) || "");
  }

  private setUserData(): IUser {
    if (typeof window !== "undefined") {
      if (!!localStorage.getItem(userLocalStorageKey)) {
        return this.getUserFromLocalStorage() as IUser;
      } else {
        this.setUserToLocalStorage(userSample);
        return userSample;
      }
    } else {
      return userSample;
    }
  }
}

export const usersStore = new UsersStore();
