"use client";
import { Header } from "@/widgets/Header/ui/Header";
import { Navigation } from "@/widgets/Navigation/ui/Navigation";
import { MedicalMetricGrid } from "@/widgets/MedicalMetric/ui/MedicalMetricGrid";
export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-10">
      <div className="bg-[var(--color-dashboard-background)] w-full max-w-400 min-h-100 rounded-3xl flex">
        <Navigation />
        <div className="flex-2 p-10">
          <Header />
          <MedicalMetricGrid className="mt-10" />
        </div>
      </div>
    </main>
  );
}
