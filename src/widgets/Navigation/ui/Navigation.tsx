"use client";
import Link from "next/link";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import { NavigationItem } from "@/entities/NavigationItem";
import { useNavigation } from "@/shared/lib/hooks/useNavigation";

export const Navigation = observer(() => {
  const { items } = useNavigation();

  return (
    <nav className="min-w-25 py-10 h-auto flex flex-col items-center gap-15 bg-white rounded-l-3xl">
      <Link href="/" className="transition-transform hover:scale-110">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
      </Link>
      <ul className="flex flex-col gap-7 items-center justify-between">
        {items.map((item) => (
          <NavigationItem key={item.alt} {...item} />
        ))}
      </ul>
    </nav>
  );
}); 