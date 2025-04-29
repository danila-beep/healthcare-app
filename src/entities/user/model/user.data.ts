import { IUser } from "./user.types";

export const userSample: IUser = {
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
  notifications: [
  ],
};
