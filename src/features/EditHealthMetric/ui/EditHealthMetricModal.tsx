"use client";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Modal } from "@/shared/ui/Modal";
import { Tabs } from "@/shared/ui/Tabs/Tabs";
import { Input } from "@/shared/ui/Input/Input";
import { useHealthMetrics } from "@/entities/HealthCard/model/hooks/useHealthMetrics";
import { useNotificationStore } from "@/entities/Notification/model/hooks/useNotificationStore";
import { validateHealthMetric } from "@/shared/lib/validation/healthMetrics";

interface EditHealthMetricModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMetricId: string;
}

export const EditHealthMetricModal = observer(
  ({ isOpen, onClose, initialMetricId }: EditHealthMetricModalProps) => {
    const { metrics, updateMetric } = useHealthMetrics();
    const { createHealthChangeNotification } = useNotificationStore();
    const [activeMetricId, setActiveMetricId] = useState(initialMetricId);
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
      setActiveMetricId(initialMetricId);
    }, [initialMetricId]);

    useEffect(() => {
      if (!isOpen) {
        setValue("");
        setError("");
      }
    }, [isOpen]);

    const activeMetric = metrics.find((metric) => metric.id === activeMetricId);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!activeMetric) return;

      console.log(activeMetric.type);

      const validationResult = validateHealthMetric(
        value,
        activeMetric.type,
        activeMetric.title
      );

      if (!validationResult.isValid) {
        setError(validationResult.error || "Ошибка валидации");
        return;
      }

      updateMetric(activeMetricId, { value: validationResult.value });
      if (validationResult.value) {
        createHealthChangeNotification(
          activeMetric,
          activeMetric.value,
          validationResult.value
        );
      }
      
      setValue("");
      setError("");
      onClose();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      
      if (activeMetric) {
        const validationResult = validateHealthMetric(
          newValue,
          activeMetric.type,
          activeMetric.title
        );
        setError(validationResult.error || "");
      }
    };

    const getPlaceholder = (metric: typeof activeMetric) => {
      if (!metric) return "";
      
      switch (metric.type) {
        case "blood_pressure":
          return "Например: 120/80";
        case "temperature":
          return "Например: 36.6";
        case "pulse":
          return "Например: 70";
        default:
          return `Введите значение в ${metric.unit}`;
      }
    };

    const tabs = metrics.map((metric) => ({
      id: metric.id,
      label: metric.title,
    }));

    return (
      <Modal isOpen={isOpen} onClose={onClose} className="p-6 min-w-200">
        <h2 className="font-mulish text-2xl leading-6 font-bold pb-1">
          Добавить показатели здоровья
        </h2>
        <p className="font-mulish text-sm leading-4 text-gray-600 mb-6">
          Добавьте новые показатели здоровья в ваш дашборд.
        </p>

        <Tabs
          tabs={tabs}
          activeTab={activeMetricId}
          onTabChange={setActiveMetricId}
          className="mb-6"
        />

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {activeMetric && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-start gap-2">
                <span className="font-mulish text-sm text-gray-600">
                  Текущее значение:
                </span>
                <span className="font-mulish text-sm font-bold">
                  {activeMetric.value} {activeMetric.unit}
                </span>
              </div>

              <Input
                label="Новое значение"
                value={value}
                onChange={handleInputChange}
                placeholder={getPlaceholder(activeMetric)}
                error={error}
              />
            </div>
          )}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg font-mulish text-sm text-gray-600 hover:bg-gray-100"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-black text-white font-mulish text-sm hover:bg-black/90"
            >
              Сохранить
            </button>
          </div>
        </form>
      </Modal>
    );
  }
);
