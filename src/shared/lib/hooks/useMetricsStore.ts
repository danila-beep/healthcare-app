import { useStore } from "@/app/store/StoreContext";

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
