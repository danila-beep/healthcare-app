"use client";
import Link from "next/link";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import { INavigationItem } from "../model/types";
import { cn } from "@/shared/lib/utils/cn";

export const NavigationItem = observer(({ icon, alt, href, isActive }: INavigationItem) => {
  return (
    <li
      className={cn(
        "relative w-15 h-15 rounded-2xl",
        "flex items-center justify-center",
        "transition-all duration-200",
        isActive ? "bg-black" : "bg-transparent hover:scale-110"
      )}
    >
      <Link href={href} className="absolute inset-0 flex items-center justify-center">
        <Image 
          className={cn(isActive && "invert")} 
          src={icon} 
          alt={alt} 
          width={32} 
          height={32} 
        />
      </Link>
    </li>
  );
}); 