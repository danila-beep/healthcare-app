export type HealthUnit = 'mg/dL' | 'bpm' | 'mmHg' | '°C' | 'kg' | 'cm' | 'kg/m²' | 'in';
export type HealthMetricType = 'medical' | 'measurement';

interface IHealthStatus {
    status: "normal" | "warning" | "critical";
    statusBgColor: string;
}

export interface HistoryEntry<T> {
    date: Date;
    value: T;
  }

export interface IHealthMetric {
    name: string;
    type: HealthMetricType;

    title: string;
    description?: string;

    value: number | string;
    maxValue?: number;
    minValue?: number;
    unit?: HealthUnit;

    status?: IHealthStatus;

    icon?: string;
    graphImage?: string;

    mainColor?: string;
    secondaryColor?: string;

    history?: HistoryEntry<number | string>[];
    addedAt?: Date;
}

