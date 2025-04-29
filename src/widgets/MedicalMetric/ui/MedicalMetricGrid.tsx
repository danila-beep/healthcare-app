import { IHealthMetric } from "@/entities/user/model/user.types";
import { useMedicalMetrics } from "../model/hooks/useMedicalMetrics";
import { MedicalMetricCard } from "./MedicalMetricCard";
import { cn } from "@/shared/lib/utils/styles/cn";
import { useState } from "react";


type MedicalMetricGridProps = {
    className?: string;
}

export const MedicalMetricGrid = ({ className }: MedicalMetricGridProps) => {
    const metrics = useMedicalMetrics();
    const [activeMetric, setActiveMetric] = useState<IHealthMetric | null>(null);

    return (
        <ul className={cn("grid grid-cols-3 gap-4", className)}>
            {metrics.map((metric) => (
                <MedicalMetricCard key={metric.name} metric={metric} />
            ))}
        </ul>
    )
}