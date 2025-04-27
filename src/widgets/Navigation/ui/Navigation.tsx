"use client";
import Link from "next/link";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import { NavigationItem } from "@/entities/NavigationItem";
import { useStore } from "@/app/store/StoreContext";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const Navigation = observer(() => {
  const { navigationStore } = useStore();
  const pathname = usePathname();

  useEffect(() => {
    navigationStore.setActiveItem(pathname);
  }, [pathname, navigationStore]);

  return (
    <nav className="min-w-25 py-10 h-full flex flex-col items-center gap-15 bg-white rounded-l-3xl">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
      </Link>
      <ul className="flex flex-col gap-7 items-center justify-between">
        {navigationStore.items.map((item) => (
          <NavigationItem key={item.alt} {...item} />
        ))}
      </ul>
    </nav>
  );
}); 