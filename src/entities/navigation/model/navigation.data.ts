import { INavigationData } from "@/shared/stores/navigation/navigation.types";
import { ROUTES } from "@/shared/config/routes";

export const navigationData: INavigationData[] = [
    {
        isActive: true,
        title: "Dashboard",
        route: ROUTES.DASHBOARD,
        icon: "/icons/Dashboard.svg",
        alt: "Dashboard"
    },
    {
        isActive: false,
        title: "Calendar",
        route: ROUTES.CALENDAR,
        icon: "/icons/Calendar.svg",
        alt: "Calendar"
    },
    {
        isActive: false,
        title: "Stats",
        route: ROUTES.STATS,
        icon: "/icons/Stats.svg",
        alt: "Stats"
    },
    {
        isActive: false,
        title: "Settings",
        route: ROUTES.SETTINGS,
        icon: "/icons/Settings.svg",
        alt: "Settings"
    },
    {
        isActive: false,
        title: "Logout",
        route: ROUTES.LOGOUT,
        icon: "/icons/Logout.svg",
        alt: "Logout"
    }
]