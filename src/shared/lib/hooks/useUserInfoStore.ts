import { useStore } from "@/app/store/StoreContext";

export const useUserInfoStore = () => {
  const { usersStore } = useStore();

  return {
    userInfo: usersStore.getUserPersonalInfo(),
  };
};
