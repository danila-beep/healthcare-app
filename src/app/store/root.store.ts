import { navigationStore } from './navigation.store';
import { healthStore } from './health.store';
import { notificationStore } from './notification.store';

export class RootStore {
  navigationStore = navigationStore;
  healthStore = healthStore;
  notificationStore = notificationStore;
}

export const rootStore = new RootStore(); 