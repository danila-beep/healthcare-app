"use client";
import Image from "next/image";
import { cn } from "@/shared/lib/utils/cn";
import { IHealthMetric } from "@/shared/types/health.type";

interface HealthCardProps extends IHealthMetric {
  handleOpenModal: (metricId: string) => void;
}

export const HealthCard = ({
  handleOpenModal,
  ...props
}: HealthCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-2xl shadow-md p-4",
        "transition-all duration-200 hover:shadow-lg cursor-pointer"
      )}
      onClick={() => handleOpenModal(props.name ? props.name : "")}
    >
      <div className="flex gap-4 items-center">
        <div className={cn("w-16 aspect-square rounded-2xl flex items-center justify-center", `bg-[${props.mainColor}]`)}>
          <Image src={props.icon ? props.icon : ""} alt={props.title} width={24} height={24} />
        </div>
        <p className="font-mulish text-sm leading-4 font-semibold text-black">
          {props.title}
        </p>
      </div>
      <div className="mt-6 font-light text-4xl leading-8 text-black flex items-center gap-2">
        <p>{props.value}</p>
        <span className="font-mulish text-sm font-bold leading-4 text-gray-500">
          {props.unit}
        </span>
      </div>
      {
        props.status && (
          <div className={cn("mt-3 font-mulish text-sm leading-4 text-black px-2 py-1 rounded-sm w-fit", `bg-[${props.status.statusBgColor}]`)}>
            {props.status.status}
          </div>
        )
      }
      <Image
        className="mt-6 w-full"
        src={props.graphImage ? props.graphImage : ""}
        alt={`${props.title} Graph`}
        width={24}
        height={24}
      />
    </div>
  );
}; 