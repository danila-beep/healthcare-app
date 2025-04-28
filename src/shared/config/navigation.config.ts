import { ROUTES } from './routes';
import { INavigationItem } from '@/entities/NavigationItem/model/types';

export const NAVIGATION_ITEMS: Omit<INavigationItem, 'isActive'>[] = [
  { icon: "/icons/Dashboard.svg", alt: "Dashboard", href: ROUTES.DASHBOARD },
  { icon: "/icons/Calendar.svg", alt: "Calendar", href: ROUTES.CALENDAR },
  { icon: "/icons/Chat.svg", alt: "Chat", href: ROUTES.CHAT },
  { icon: "/icons/Stats.svg", alt: "Stats", href: ROUTES.STATS },
  { icon: "/icons/Settings.svg", alt: "Settings", href: ROUTES.SETTINGS },
  { icon: "/icons/Logout.svg", alt: "Logout", href: ROUTES.LOGOUT },
]; 