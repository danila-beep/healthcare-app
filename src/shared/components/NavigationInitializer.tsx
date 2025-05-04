'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { navigationStore } from '@/shared/stores/navigation/navigation.store';
import { observer } from 'mobx-react-lite';

export const NavigationInitializer = observer(() => {
    const pathname = usePathname();

    useEffect(() => {
        // Инициализация слушателей и обработка изменений pathname только на клиенте
        navigationStore.initializeClientSide(pathname || '/');

        return () => {
            navigationStore.dispose();
        };
    }, [pathname]);

    return null;
}); 