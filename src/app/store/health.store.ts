import { makeAutoObservable } from 'mobx';
import { IHealthMetric, HealthMetrics } from '@/entities/HealthCard/model/types';
import { INITIAL_HEALTH_METRICS } from '@/shared/config/health.config';

class HealthStore {
  metrics: HealthMetrics = INITIAL_HEALTH_METRICS;

  constructor() {
    makeAutoObservable(this);
  }

  updateMetric = (id: string, data: Partial<IHealthMetric>) => {
    this.metrics = this.metrics.map(metric => 
      metric.id === id ? { ...metric, ...data } : metric
    );
  }

  addMetric = (metric: IHealthMetric) => {
    this.metrics = [...this.metrics, metric];
  }

  removeMetric = (id: string) => {
    this.metrics = this.metrics.filter(metric => metric.id !== id);
  }

  getMetricById = (id: string): IHealthMetric | undefined => {
    return this.metrics.find(metric => metric.id === id);
  }
}

export const healthStore = new HealthStore(); 