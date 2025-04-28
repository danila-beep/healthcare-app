"use client";
import { observer } from "mobx-react-lite";
import { HealthCard } from "@/entities/HealthCard/ui/HealthCard";
import { useHealthMetrics } from "@/entities/HealthCard/model/hooks/useHealthMetrics";

interface HealthGridProps {
  handleOpenModal: (metricId: string) => void;
}

export const HealthGrid = observer(({ handleOpenModal }: HealthGridProps) => {
  const { metrics } = useHealthMetrics();

  return (
    <div className="grid grid-cols-3 gap-8 justify-between mt-7">
      {metrics.map((metric) => (
        <HealthCard 
          key={metric.id} 
          {...metric} 
          handleOpenModal={handleOpenModal}
        />
      ))}
    </div>
  );
});
