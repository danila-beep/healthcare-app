'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { navigationStore } from '@/shared/stores/navigation/navigation.store';
import { observer } from 'mobx-react-lite';

// Создаем компонент-обертку для реактивного доступа к данным
const NavigationState = observer(({ children }: { children: (data: {
    navigationData: typeof navigationStore.navigationData;
    activeNavigationData: ReturnType<typeof navigationStore.getActiveNavigationData>;
    setActiveNavigationData: typeof navigationStore.setActiveNavigationData;
}) => React.ReactNode }) => {
    return children({
        navigationData: navigationStore.navigationData,
        activeNavigationData: navigationStore.getActiveNavigationData(),
        setActiveNavigationData: navigationStore.setActiveNavigationData,
    });
});

export const useNavigation = () => {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname) {
            navigationStore.updateActiveNavigationByPath(pathname);
        }
    }, [pathname]);

    return {
        NavigationState,
    };
}; 