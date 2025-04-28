export interface IHealthMetric {
  id: string;
  title: string;
  icon: string;
  iconBgColor: string;
  value: number | string;
  unit: string;
  status: string;
  statusBgColor: string;
  graphImage: string;
}

export type HealthMetrics = IHealthMetric[]; 