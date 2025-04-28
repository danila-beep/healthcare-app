"use client";
import { Navigation } from "@/widgets/Navigation/ui/Navigation";
import { Header } from "@/widgets/Header/ui/Header";
import { BMICalculator } from "@/widgets/BMICalculator/ui/BMICalculator";
import { useModal } from "@/shared/lib/hooks/useModal";
import { HealthGrid } from "@/widgets/HealthGrid/ui/HealthGrid";
import { EditHealthMetricModal } from "@/features/EditHealthMetric";
import { useState } from "react";


export default function Home() {
  const { isOpen, open, close } = useModal();
  const [activeMetricId, setActiveMetricId] = useState<string>("");

  const handleOpenModal = (metricId: string) => {
    setActiveMetricId(metricId);
    open();
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-[var(--color-dashboard-background)] w-full max-w-400 min-h-100 rounded-3xl flex">
        <Navigation />
        <div className="flex-2 p-10">
          <Header />
          <HealthGrid handleOpenModal={handleOpenModal} />
        </div>
        <BMICalculator />
      </div>
      <EditHealthMetricModal 
        isOpen={isOpen} 
        onClose={close} 
        initialMetricId={activeMetricId}
      />
    </main>
  );
}
