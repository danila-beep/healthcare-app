import Image from "next/image";
import { cn } from "@/shared/lib/utils/cn";
import { useState } from "react";
interface IconButtonProps {
  icon: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export const IconButton = ({
  icon,
  alt,
  className,
  onClick,
}: IconButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    onClick?.();
    if (alt === "Notifications") {
      setIsOpen(!isOpen);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className={cn(
          "p-3 bg-white rounded-2xl shadow-md cursor-pointer",
          "transition-all duration-200 hover:shadow-lg hover:scale-105",
          className
        )}
      >
        <Image src={icon} alt={alt} width={24} height={24} />
      </button>
      {alt === "Notifications" && (
        <div className="absolute top-[-5px] right-[-5px]">
          <div className="w-5 aspect-square bg-red-500 rounded-md flex items-center justify-center">
            <span className="text-white text-xs">1</span>
          </div>
        </div>
      )}
      {alt === "Notifications" && isOpen && (
        <div className="absolute top-0 right-0 bg-white rounded-md min-w-100 shadow-md">
          <div className="flex items-center justify-between px-5 pt-5">
            <p className="font-mulish text-md leading-4 font-bold">
              Activity Feed
            </p>
            <button
              onClick={handleClose}
              className="font-mulish text-sm leading-4 font-bold w-8 aspect-square bg-white rounded-md flex items-center justify-center border border-gray-300 cursor-pointer"
            >
              X
            </button>
          </div>
          <span className="block h-[1px] w-full bg-gray-200 my-5"></span>
          <div className="flex flex-col items-center justify-center gap-2 py-10">
            <Image
              src="/icons/NotificationIcon.svg"
              alt="Notification"
              width={48}
              height={48}
            />
            <p className="font-mulish text-sm leading-4 text-gray-400">
              No notifications yet
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
