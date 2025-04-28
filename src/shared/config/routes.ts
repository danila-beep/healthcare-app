export const ROUTES = {
  DASHBOARD: '/',
  CALENDAR: '/calendar',
  CHAT: '/chat',
  STATS: '/stats',
  SETTINGS: '/settings',
  LOGOUT: '/logout',
} as const;

export type AppRoutes = typeof ROUTES[keyof typeof ROUTES]; 