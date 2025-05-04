import Link from "next/link";
import Image from "next/image";
import { INavigationData } from "@/entities/navigation/model/navigation.types";
import { cn } from "@/shared/lib/utils/styles/cn";

export const NavigationItem = ({ data }: { data: INavigationData }) => {
  return (
    <li
      className={cn(
        "relative w-13 h-13 rounded-2xl flex items-center justify-center",
        "bg-white shadow-md",
        "transition-all duration-200 hover:shadow-lg hover:scale-105",
        data.isActive && "invert"
      )}
      data-active={data.isActive}
    >
      <Link href={data.route} className="absolute inset-0" />
      <Image src={data.icon || ""} alt={data.title} width={24} height={24} />
    </li>
  );
};
