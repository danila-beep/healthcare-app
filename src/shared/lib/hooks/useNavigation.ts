import { usePathname } from 'next/navigation';
import { useStore } from '@/app/store/StoreContext';
import { useEffect } from 'react';

export const useNavigation = () => {
  const { navigationStore } = useStore();
  const pathname = usePathname();

  useEffect(() => {
    navigationStore.setActiveItem(pathname);
  }, [pathname, navigationStore]);

  return {
    items: navigationStore.items,
    activeItem: navigationStore.activeItem,
    setActiveItem: navigationStore.setActiveItem,
  };
}; 