"use client";
import { observer } from "mobx-react-lite";
import { HealthCard } from "@/entities/HealthCard/ui/HealthCard";
import { useHealthMetrics } from "@/entities/HealthCard/model/hooks/useHealthMetrics";

interface HealthGridProps {
  handleOpenModal: (metricId: string) => void;
}

export const HealthGrid = observer(({ handleOpenModal }: HealthGridProps) => {
  const { metrics } = useHealthMetrics("medical");

  return (
    <div className="grid grid-cols-3 gap-8 justify-between mt-7">
      {metrics.map((metric) => (
        <HealthCard 
          key={metric.name} 
          {...metric}
          handleOpenModal={handleOpenModal}
        />
      ))}
    </div>
  );
});
