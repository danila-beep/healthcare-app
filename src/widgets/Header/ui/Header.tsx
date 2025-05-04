"use client";

import { HeaderTitle } from "./HeaderTitle";
import { UserButton } from "@/features/User/ui/UserButton";
import { NotificationButton } from "@/features/Notifications/ui/NotificationButton";


export const Header = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between items-center">
      <HeaderTitle title={title} />
      <div className="flex gap-3">
        <NotificationButton />
        <UserButton />
      </div>
    </div>
  );
}; 