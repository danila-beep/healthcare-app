export const ROUTES = {
  DASHBOARD: '/dashboard',
  CALENDAR: '/calendar',
  CHAT: '/chat',
  STATS: '/stats',
  SETTINGS: '/settings',
  LOGOUT: '/logout',
} as const;

export type AppRoutes = typeof ROUTES[keyof typeof ROUTES]; 