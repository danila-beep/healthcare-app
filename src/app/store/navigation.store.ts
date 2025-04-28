import { makeAutoObservable } from 'mobx';
import { INavigationItem, NavigationItems } from '@/entities/NavigationItem/model/types';
import { NAVIGATION_ITEMS } from '@/shared/config/navigation.config';

class NavigationStore {
  items: NavigationItems = NAVIGATION_ITEMS.map(item => ({
    ...item,
    isActive: item.href === '/'
  }));

  constructor() {
    makeAutoObservable(this);
  }

  setActiveItem = (href: string) => {
    this.items = this.items.map(item => ({
      ...item,
      isActive: item.href === href
    }));
  }

  get activeItem(): INavigationItem | undefined {
    return this.items.find(item => item.isActive);
  }
}

export const navigationStore = new NavigationStore(); 