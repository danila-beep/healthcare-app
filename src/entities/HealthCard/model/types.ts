export type HealthMetricType = 
  | 'blood_pressure'
  | 'blood_sugar'
  | 'weight'
  | 'height'
  | 'temperature'
  | 'pulse'
  | 'other';

export interface IHealthMetric {
  id: string;
  title: string;
  type: HealthMetricType;
  icon: string;
  iconBgColor: string;
  value: number | string;
  unit: string;
  status: string;
  statusBgColor: string;
  graphImage: string;
  normalRange?: {
    min: number;
    max: number;
  };
}

export type HealthMetrics = IHealthMetric[]; 