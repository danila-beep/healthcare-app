import { navigationStore } from './navigation.store';

export class RootStore {
  navigationStore = navigationStore;
}

export const rootStore = new RootStore(); 