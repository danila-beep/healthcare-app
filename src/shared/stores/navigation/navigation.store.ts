import { INavigationData } from "./navigation.types";
import { makeAutoObservable } from "mobx";
import { navigationData } from "@/entities/navigation/model/navigation.data";

class NavigationStore {
    navigationData: INavigationData[] = navigationData;

    constructor() {
        makeAutoObservable(this);
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
}

export const navigationStore = new NavigationStore();