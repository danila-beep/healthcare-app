import { useStore } from '@/app/store/StoreContext';

export const useHealthMetrics = (type?: "medical" | "measurement") => {
  const { usersStore } = useStore();
  if (type) {
    if (type === "medical") {
      return {
        metrics: usersStore.getUserMedicalMetrics(),
      }
    } else {
      return {
        metrics: usersStore.getUserMeasurementMetrics()
      }
    }
  } else {
    return {
      metrics: usersStore.getUserAllMetrics(),
    }
  }
}; 