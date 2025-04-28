import { IHealthMetric } from "@/entities/HealthCard/model/types";

export const INITIAL_HEALTH_METRICS: IHealthMetric[] = [
  {
    id: "1",
    type: "blood_sugar",
    title: "Blood Sugar",
    icon: "/icons/BloodShugar.svg",
    iconBgColor: "bg-[#F8DEBD]",
    value: 80,
    unit: "mg/dL",
    status: "Normal",
    statusBgColor: "bg-[#F8DEBD]",
    graphImage: "/illustrations/BloodShugarGraph.svg"
  },
  {
    id: "2",
    type: "pulse",
    title: "Heart Rate",
    icon: "/icons/HeartRate.svg",
    iconBgColor: "bg-[#FBF0F3]",
    value: 98,
    unit: "bpm",
    status: "Normal",
    statusBgColor: "bg-[#FBF0F3]",
    graphImage: "/illustrations/HeartRateGraph.svg"
  },
  {
    id: "3",
    type: "blood_pressure",
    title: "Blood Pressure",
    icon: "/icons/BloodPreasure.svg",
    iconBgColor: "bg-[#D0FBFF]",
    value: "102 / 72",
    unit: "mmhg",
    status: "Normal",
    statusBgColor: "bg-[#D0FBFF]",
    graphImage: "/illustrations/BloodPreasureGraph.svg"
  }
]; 