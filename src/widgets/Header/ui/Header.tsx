"use client";

import { NotificationButton } from "@/features/Notifications/ui/NotificationButton";
import { HeaderTitle } from "./HeaderTitle";


export const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <HeaderTitle title="Health Overview" />
      <div className="flex gap-3">
        <NotificationButton />
      </div>
    </div>
  );
}; 