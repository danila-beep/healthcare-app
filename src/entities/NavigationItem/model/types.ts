export interface INavigationItem {
  icon: string;
  alt: string;
  href: string;
  isActive: boolean;
}

export type NavigationItems = INavigationItem[]; 