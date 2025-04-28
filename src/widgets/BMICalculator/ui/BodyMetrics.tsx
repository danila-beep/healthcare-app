import Image from "next/image";

interface MetricCardProps {
  label: string;
  value: number;
  unit: string;
  backgroundColor: string;
}

const MetricCard = ({ label, value, unit, backgroundColor }: MetricCardProps) => {
  return (
    <div className={`${backgroundColor} rounded-2xl p-4 flex items-end justify-between font-mulish text-md text-black`}>
      <p>{label}</p>
      <div className="flex flex-col items-center justify-between gap-3">
        <Image
          src="/illustrations/MeasurementGraph.svg"
          alt="Measurement Graph"
          width={100}
          height={100}
        />
        <p>{value} {unit}</p>
      </div>
    </div>
  );
};

interface BodyMetricsProps {
  height: number;
  weight: number;
}

export const BodyMetrics = ({ height, weight }: BodyMetricsProps) => {
  return (
    <>
      <MetricCard
        label="Height"
        value={height}
        unit="cm"
        backgroundColor="bg-[#F8DEBD]"
      />
      <MetricCard
        label="Weight"
        value={weight}
        unit="kg"
        backgroundColor="bg-[#D0FBFF]"
      />
    </>
  );
} 