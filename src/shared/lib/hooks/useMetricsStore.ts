import { useStore } from "@/app/providers/StoreProvider";

export const useMetricsStore = () => {
  const { usersStore } = useStore();

  return {
    metrics: usersStore.getUserAllMetrics(),
    getMetricByName: usersStore.getUserMetricByName,
    updateMetric: usersStore.updateMetric,
    addMetric: usersStore.addMetric,
    removeMetric: usersStore.removeMetric,
  };
};
