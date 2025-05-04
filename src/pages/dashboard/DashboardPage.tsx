import { Header } from "@/widgets/Header/ui/Header";
import { MedicalMetricGrid } from "@/widgets/MedicalMetric/ui/MedicalMetricGrid";
import { Navigation } from "@/widgets/Navigation/ui/Navigation";

export default function DashboardPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen px-10">
            <div className="bg-[var(--color-dashboard-background)] w-full max-w-400 min-h-100 rounded-3xl flex">
                <Navigation />      
                <div className="flex-2 p-10">
                    <Header title="Health Overview" />
                    <MedicalMetricGrid className="mt-10" />
                </div>
            </div>
        </main>
    )
}

