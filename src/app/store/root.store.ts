import { navigationStore } from './navigation.store';
import { healthStore } from './health.store';
import { notificationStore } from './notification.store';
import { usersStore } from './users.store';

export class RootStore {
  navigationStore = navigationStore;
  healthStore = healthStore;
  notificationStore = notificationStore;
  usersStore = usersStore;
}

export const rootStore = new RootStore(); 