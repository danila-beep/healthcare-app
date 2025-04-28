"use client";
import Image from "next/image";
import { cn } from "@/shared/lib/utils/cn";
import { IHealthMetric } from "../model/types";

interface HealthCardProps extends IHealthMetric {
  handleOpenModal: (metricId: string) => void;
}

export const HealthCard = ({
  id,
  title,
  icon,
  iconBgColor,
  value,
  unit,
  status,
  statusBgColor,
  graphImage,
  handleOpenModal
}: HealthCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-2xl shadow-md p-4",
        "transition-all duration-200 hover:shadow-lg cursor-pointer"
      )}
      onClick={() => handleOpenModal(id)}
    >
      <div className="flex gap-4 items-center">
        <div className={cn("w-16 aspect-square rounded-2xl flex items-center justify-center", iconBgColor)}>
          <Image src={icon} alt={title} width={24} height={24} />
        </div>
        <p className="font-mulish text-sm leading-4 font-semibold text-black">
          {title}
        </p>
      </div>
      <div className="mt-6 font-light text-4xl leading-8 text-black flex items-center gap-2">
        <p>{value}</p>
        <span className="font-mulish text-sm font-bold leading-4 text-gray-500">
          {unit}
        </span>
      </div>
      <div className={cn("mt-3 font-mulish text-sm leading-4 text-black px-2 py-1 rounded-sm w-fit", statusBgColor)}>
        {status}
      </div>
      <Image
        className="mt-6 w-full"
        src={graphImage}
        alt={`${title} Graph`}
        width={24}
        height={24}
      />
    </div>
  );
}; 