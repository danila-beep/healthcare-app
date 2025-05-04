import { IHealthMetric } from "@/entities/user/model/user.types";
import Image from "next/image";
import { cn } from "@/shared/lib/utils/styles/cn";


export const MedicalMetricCard = ({ metric, onClick }: { metric: IHealthMetric, onClick: (metricName: string) => void }) => {

  const handleClick = () => {
    console.log("clicked card metric", metric.name);
    onClick(metric.name);
  }

  return (
    <li className="bg-white rounded-2xl p-4 shadow-md cursor-pointer hover:shadow-lg transition-all duration-200" onClick={handleClick}>
      <div className="flex items-center justify-start gap-5">
        <div className={cn("flex items-center justify-center w-13 h-13 rounded-2xl", metric.mainColor ? `bg-[${metric.mainColor}]` : "bg-gray-100")}>
          <Image
            src={metric.icon || ""}
            alt={metric.title}
            width={24}
            height={24}
            className="h-1/2"
          />
        </div>
        <h2 className="text-lg font-bold">{metric.title}</h2>
      </div>
      <div className="flex items-center justify-start gap-3 mt-6">
        <p className="text-3xl font-normal text-black">{metric.value}</p>
        <p className="text-sm text-gray-500">{metric.unit}</p>
      </div>
      <p className={cn("text-sm font-normal mt-3 w-fit px-2 py-1 rounded-md")} style={{ backgroundColor: metric.status?.statusBgColor }}>{metric.status?.status}</p>
      {metric.description && <p className="text-sm text-gray-500 mt-3">{metric.description}</p>}
      {metric.graphImage && <Image src={metric.graphImage} alt={metric.title} width={24} height={24} className="w-full h-auto" />}
    </li>
  );
};
