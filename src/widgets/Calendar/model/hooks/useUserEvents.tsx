import { useStore } from "@/app/store/StoreContext";


export const useUserEvents = () => {
    const { usersStore } = useStore();
    return usersStore.getUserEvents();
};

