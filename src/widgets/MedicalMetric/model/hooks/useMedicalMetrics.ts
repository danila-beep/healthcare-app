import { useStore } from "@/app/store/StoreContext";

export const useMedicalMetrics = () => {
    const { usersStore } = useStore();
    const metrics = usersStore.getUserMedicalMetrics();
    return metrics;
};