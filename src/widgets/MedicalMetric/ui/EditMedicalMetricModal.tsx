"use client";

import { Modal } from "@/shared/ui/Modal/Modal";
import { TabProps, Tabs } from "@/shared/ui/Tabs/Tabs";
import { useMedicalMetrics } from "../model/hooks/useMedicalMetrics";
import { useState, useEffect } from "react";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { ValidateBloodPressureValue, ValidateBloodSugarValue, ValidateHeartRateValue } from "@/shared/lib/utils/validation/healthMetrics";
import { useMetricsStore } from "@/shared/lib/hooks/useMetricsStore";
import { useNotificationStore } from "@/features/Notifications/model/hooks/useNotificationStore";

interface EditMedicalMetricModalProps {
  isOpen: boolean;
  onClose: () => void;
  metricName: string;
  handleMetricTabChange: (metricName: string) => void;
}

const EditMedicalMetricModal = ({
  isOpen,
  onClose,
  metricName,
  handleMetricTabChange,
}: EditMedicalMetricModalProps) => {
  const metrics = useMedicalMetrics();
  const {updateMetric} = useMetricsStore();
  const {addNotification} = useNotificationStore();
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [tabs, setTabs] = useState<TabProps[]>(
    metrics.map((metric) => ({
      label: metric.title,
      value: metric.name,
      isActive: metric.name === metricName,
      accentColor: metric.mainColor || "",
    }))
  );

  useEffect(() => {
    setTabs(metrics.map((metric) => ({
      label: metric.title,
      value: metric.name,
      isActive: metric.name === metricName,
      accentColor: metric.mainColor || "",
    })));
    setValue("")
    setError("")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metricName]);

  const handleTabClick = (value: string) => {
    handleMetricTabChange(value);
    setTabs(tabs.map((tab) => ({ ...tab, isActive: tab.value === value })));
    setValue("");
    setError("");
  };

  const handleValueChange = (value: string) => {
    setValue(value);
    setError("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;
    
    switch (metricName) {
      case "blood_sugar":
        const bloodSugarValidationResult = ValidateBloodSugarValue(Number(value));
        if (!bloodSugarValidationResult.isValid) {
          setError(bloodSugarValidationResult.errorMessage || "");
          isValid = false;
        } else {
          setError("");
        }
        break;
      case "heart_rate":  
        const heartRateValidationResult = ValidateHeartRateValue(Number(value));
        if (!heartRateValidationResult.isValid) {
          setError(heartRateValidationResult.errorMessage || "");
          isValid = false;
        } else {
          setError("");
        }
          break;
      case "blood_pressure":
        const bloodPressureValidationResult = ValidateBloodPressureValue(value);
        if (!bloodPressureValidationResult.isValid) {
          setError(bloodPressureValidationResult.errorMessage || "");
          isValid = false;
        } else {
          setError("");
        }
        break;
      default:
        break;
    }

    if (isValid) {
      updateMetric(metricName, value);
      addNotification({
        id: crypto.randomUUID(),
        title: "Metric updated",
        message: "Your metric has been updated successfully",
        type: "health",
        isRead: false,
        createdAt: new Date(),
      });
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} showCloseButton={false}>
      <h1 data-name={metricName} className="font-mulish text-2xl font-bold">
        Update your health metric
      </h1>
      <p className="font-mulish text-sm text-gray-500 pb-4">
        Add new health metric to your profile.
      </p>
      <div>
        <Tabs tabs={tabs} handleClick={handleTabClick} />
      </div>

      <span className="block w-full h-[1px] bg-gray-200 my-8" />

      <form action="" onSubmit={handleSubmit}>
        <Input
          type="text"
          value={value}
          onChange={handleValueChange}
          error={error}
          label={`${metrics.find((metric) => metric.name === metricName)?.title} Value`}
          unit={metrics.find((metric) => metric.name === metricName)?.unit || ""}
        />

        <div className="flex items-center justify-end gap-4 mt-6">
          <Button type="button" className="py-2 rounded-xl bg-white text-black border-none shadow-none" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" className="py-2 rounded-xl bg-black text-white">
            Save Changes
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditMedicalMetricModal;
