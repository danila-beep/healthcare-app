import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface MeasurementItemProps {
  label: string;
  value: number;
  trend: "up" | "down";
  unit?: string;
}

const MeasurementItem = ({ label, value, trend, unit = "in" }: MeasurementItemProps) => {
  const TrendIcon = trend === "up" ? ArrowUpIcon : ArrowDownIcon;
  const trendColor = trend === "up" ? "text-red-500" : "text-green-500";

  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col items-center justify-between min-w-30">
      <p className="font-mulish text-sm text-gray-400 font-normal flex items-center gap-2">
        {label} ({unit})
      </p>
      <p className="font-mulish text-2xl text-black font-normal flex items-center gap-2">
        {value} <TrendIcon className={`w-4 h-4 ${trendColor}`} />
      </p>
    </div>
  );
};

export const BodyMeasurements = () => {
  return (
    <div>
      <p className="font-mulish text-xl text-white font-normal pb-2">
        Body Measurements
      </p>
      <p className="font-mulish text-sm text-gray-400 font-normal">
        Last checked 2 Days ago
      </p>
      <div className="relative flex items-end justify-between mt-10">
        <div className="flex min-w-1/5 flex-col gap-4">
          <MeasurementItem label="Chest" value={36} trend="up" />
          <MeasurementItem label="Waist" value={34} trend="down" />
          <MeasurementItem label="Hip" value={42.5} trend="down" />
        </div>
        <DotLottieReact
          src="/lottie/SportGuy.lottie"
          loop={true}
          autoplay={true}
          className="absolute top-1/2 translate-y-[-50%] right-[-270px] w-200"
        />
      </div>
    </div>
  );
} 