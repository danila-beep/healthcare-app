import { useStore } from "@/app/store/StoreContext";

export const useNavigationStore = () => {
    const { navigationStore } = useStore();

    return {
        navigationStore,
        getNavigationData: navigationStore.getNavigationData,
        getActiveNavigationData: navigationStore.getActiveNavigationData,
        getNavigationDataByRoute: navigationStore.getNavigationDataByRoute,
        setActiveNavigationData: navigationStore.setActiveNavigationData,
        setInactiveNavigationData: navigationStore.setInactiveNavigationData,
        setNavigationData: navigationStore.setNavigationData,
        addNavigationData: navigationStore.addNavigationData,
        removeNavigationData: navigationStore.removeNavigationData,
        updateNavigationData: navigationStore.updateNavigationData,
    };
}