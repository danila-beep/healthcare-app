import { INavigationData } from "./navigation.types";
import { makeAutoObservable } from "mobx";
import { navigationData } from "@/entities/navigation/model/navigation.data";

class NavigationStore {
    navigationData: INavigationData[] = navigationData;
    isInitialized: boolean = false;

    constructor() {
        makeAutoObservable(this);
        // Инициализируем только базовые данные без привязки к window/pathname
        this.setInactiveNavigationData();
    }

    public initializeClientSide = (pathname: string) => {
        if (!this.isInitialized) {
            // Добавляем слушатель только при первой инициализации
            window.addEventListener('popstate', this.handleRouteChange);
            this.isInitialized = true;
        }
        this.updateActiveNavigationByPath(pathname);
    }

    private handleRouteChange = () => {
        const pathname = window.location.pathname;
        this.updateActiveNavigationByPath(pathname);
    }

    public updateActiveNavigationByPath = (pathname: string) => {
        // Находим самый подходящий маршрут (с наибольшим совпадением)
        const matchingRoutes = this.navigationData
            .filter(item => pathname.startsWith(item.route))
            .sort((a, b) => b.route.length - a.route.length);

        console.log('Current pathname:', pathname);
        console.log('Matching routes:', matchingRoutes);

        if (matchingRoutes.length > 0) {
            console.log('Setting active route:', matchingRoutes[0].route);
            this.setActiveNavigationData(matchingRoutes[0].route);
        } else {
            console.log('No matching routes, setting root as active');
            this.setActiveNavigationData('/');
        }
    }

    // Getters
    public getNavigationData = () => {
        return this.navigationData;
    }

    public getActiveNavigationData = () => {
        return this.navigationData.find(item => item.isActive);
    }

    public getNavigationDataByRoute = (route: string) => {
        return this.navigationData.find(item => item.route === route);
    }

    // Setters
    public setActiveNavigationData = (route: string) => {
        this.setInactiveNavigationData();
        this.navigationData.forEach(item => {
            item.isActive = item.route === route;
        });
    }
    
    public setInactiveNavigationData = () => {
        this.navigationData.forEach(item => {
            item.isActive = false;
        });
    }

    public setNavigationData = (data: INavigationData[]) => {
        this.navigationData = data;
        if (typeof window !== 'undefined') {
            this.updateActiveNavigationByPath(window.location.pathname);
        }
    }

    public addNavigationData = (data: INavigationData) => {
        this.navigationData.push(data);
    }

    public removeNavigationData = (route: string) => {
        this.navigationData = this.navigationData.filter(item => item.route !== route);
    }   

    public updateNavigationData = (route: string, data: INavigationData) => {
        const index = this.navigationData.findIndex(item => item.route === route);
        if (index !== -1) {
            this.navigationData[index] = data;
        }
    }

    public dispose = () => {
        if (this.isInitialized && typeof window !== 'undefined') {
            window.removeEventListener('popstate', this.handleRouteChange);
            this.isInitialized = false;
        }
    }
}

export const navigationStore = new NavigationStore();