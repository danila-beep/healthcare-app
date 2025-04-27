import { makeAutoObservable } from 'mobx';
import { INavigationItem, NavigationItems } from '@/entities/NavigationItem/model/types';

class NavigationStore {
  items: NavigationItems = [
    { icon: "/icons/Dashboard.svg", alt: "Dashboard", href: "/", isActive: true },
    { icon: "/icons/Calendar.svg", alt: "Calendar", href: "/calendar", isActive: false },
    { icon: "/icons/Chat.svg", alt: "Chat", href: "/chat", isActive: false },
    { icon: "/icons/Stats.svg", alt: "Stats", href: "/stats", isActive: false },
    { icon: "/icons/Settings.svg", alt: "Settings", href: "/settings", isActive: false },
    { icon: "/icons/Logout.svg", alt: "Logout", href: "/logout", isActive: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setActiveItem(href: string) {
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