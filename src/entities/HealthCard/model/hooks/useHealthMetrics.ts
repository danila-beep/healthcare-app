import { useStore } from '@/app/store/StoreContext';

export const useHealthMetrics = () => {
  const { healthStore } = useStore();

  return {
    metrics: healthStore.metrics,
    updateMetric: healthStore.updateMetric,
    addMetric: healthStore.addMetric,
    removeMetric: healthStore.removeMetric,
    getMetricById: healthStore.getMetricById,
  };
}; 