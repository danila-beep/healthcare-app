"use client";
import { IconButton } from "@/shared/ui/IconButton/IconButton";
import { HeaderTitle } from "./HeaderTitle";
import { NotificationButton } from "@/features/NotificationList/ui/NotificationButton";
export const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <HeaderTitle title="Health Overview" date="August 12, 2021" />
      <div className="flex gap-3">
        <IconButton icon="/icons/Search.svg" alt="Search" />
        <NotificationButton />
      </div>
    </div>
  );
}; 