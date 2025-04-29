import { useStore } from "@/app/providers/StoreProvider";

export const useMedicalMetrics = () => {
    const { usersStore } = useStore();
    const metrics = usersStore.getUserMedicalMetrics();
    return metrics;
};