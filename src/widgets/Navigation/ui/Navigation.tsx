"use client";

import { useNavigation } from '@/shared/hooks/useNavigation';
import { observer } from 'mobx-react-lite';
import { NavigationItem } from '@/entities/navigation/ui/NavigationItem';
import Image from 'next/image';

export const Navigation = observer(() => {
  const { NavigationState } = useNavigation();

  return (
    <div className="flex flex-col gap-6 px-6 py-10 bg-white rounded-l-3xl items-center">
      <Image src="/logo.png" alt="logo" width={40} height={40} className="mb-6"/>
      <NavigationState>
        {({ navigationData, activeNavigationData }) => (
          <nav className="flex flex-col gap-6 bg-white rounded-l-3xl">
            {navigationData.map((item) => (
              <NavigationItem key={item.alt || item.title} data={item} />
            ))}
          </nav>
        )}
      </NavigationState>
    </div>
  );
});
