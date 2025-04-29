import { usersStore } from "@/shared/stores/user/user.store";
import { navigationStore } from "@/shared/stores/navigation/navigation.store";

export interface MedicalMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  date: Date;
}

export class RootStore {
  navigationStore = navigationStore;
  usersStore = usersStore;
  private metrics: MedicalMetric[] = [];

  addMetric(metric: MedicalMetric) {
    this.metrics.push(metric);
  }

  updateMetric(id: string, value: number) {
    const metric = this.metrics.find((m) => m.id === id);
    if (metric) {
      metric.value = value;
    }
  }

  getMetrics() {
    return this.metrics;
  }
}

export const rootStore = new RootStore(); 