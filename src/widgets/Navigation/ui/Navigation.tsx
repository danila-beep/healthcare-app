"use client";

import Image from "next/image";
import { observer } from "mobx-react-lite";
import { NavigationItem } from "@/entities/navigation/ui/NavigationItem";
import { useNavigationStore } from "@/widgets/Navigation/model/hooks/useNavigationStore";

export const Navigation = observer(() => {
  const { getNavigationData } = useNavigationStore();
  const items = getNavigationData();

  return (
    <nav className="min-w-25 py-10 h-auto flex flex-col items-center gap-15 bg-white rounded-l-3xl">
      <Image src="/logo.png" alt="logo" width={40} height={40} />
      <ul className="flex flex-col gap-7 items-center justify-between">
        {items.map((item) => (
          <NavigationItem key={item.alt || item.title} data={item} />
        ))}
      </ul>
    </nav>
  );
});
