import { usersStore } from "@/shared/stores/user/user.store";
import { navigationStore } from "@/shared/stores/navigation/navigation.store";

export class RootStore {
  navigationStore = navigationStore;
  usersStore = usersStore;
}

export const rootStore = new RootStore(); 