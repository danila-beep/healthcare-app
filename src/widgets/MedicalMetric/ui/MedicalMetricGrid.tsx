import { useModal } from "@/shared/lib/hooks/useModal";
import { useMedicalMetrics } from "../model/hooks/useMedicalMetrics";
import EditMedicalMetricModal from "./EditMedicalMetricModal";
import { MedicalMetricCard } from "./MedicalMetricCard";
import { cn } from "@/shared/lib/utils/styles/cn";
import { useState } from "react";

type MedicalMetricGridProps = {
  className?: string;
};

export const MedicalMetricGrid = ({ className }: MedicalMetricGridProps) => {
  const { isOpen, open, close } = useModal();
  const [activeModalTab, setActiveModalTab] = useState<string>("blood_sugar");
  const metrics = useMedicalMetrics();

  const handleMetricCardClick = (metricName: string) => {
    setActiveModalTab(metricName);
    open();
  };

  const handleMetricTabChange = (metricName: string) => {
    setActiveModalTab(metricName);
  };

  return (
    <>
      <ul className={cn("grid grid-cols-3 gap-4", className)}>
        {metrics.map((metric) => (
          <MedicalMetricCard
            key={metric.name}
            metric={metric}
            onClick={handleMetricCardClick}
          />
        ))}
      </ul>
      <EditMedicalMetricModal
        isOpen={isOpen}
        onClose={close}
        metricName={activeModalTab}
        handleMetricTabChange={handleMetricTabChange}
      />
    </>
  );
};
