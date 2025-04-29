import { IHealthMetricValidationResult } from "@/shared/lib/utils/validation/validation.types";

export const ValidateBloodSugarValue = (
  value: number
): IHealthMetricValidationResult => {
  const finalResult: IHealthMetricValidationResult = {
    isValid: true,
    errorMessage: "",
  };

  if (value < 3.5) {
    finalResult.isValid = false;
    finalResult.errorMessage =
      "Blood sugar value cannot be less than 3.5 mg/dL";
  }

  if (value > 10) {
    finalResult.isValid = false;
    finalResult.errorMessage = "Blood sugar value cannot be greater than 10 mg/dL";
  }

  return finalResult;
};

export const ValidateHeartRateValue = (value: number): IHealthMetricValidationResult => {
  const finalResult: IHealthMetricValidationResult = {
    isValid: true,
    errorMessage: "",
  };

  if (value < 30) {
    finalResult.isValid = false;
    finalResult.errorMessage = "Heart rate value cannot be less than 30 bpm";
  }

  if (value > 180) {
    finalResult.isValid = false;
    finalResult.errorMessage = "Heart rate value cannot be greater than 180 bpm";
  }

  return finalResult;
};

export const ValidateBloodPressureValue = (value: string): IHealthMetricValidationResult => {
  const finalResult: IHealthMetricValidationResult = {
    isValid: true,
    errorMessage: "",
  };

  if (!value.includes("/")) {
    console.log("value", value);
    finalResult.isValid = false;
    finalResult.errorMessage = "Blood pressure value must be in the format of systolic/diastolic";
    return finalResult;
  }

  const [systolic, diastolic] = value.split("/");

  if (Number(systolic) < 90) {
    finalResult.isValid = false;
    finalResult.errorMessage = "Systolic pressure value cannot be less than 90 mmHg";
  } 

  if (Number(diastolic) < 60) {
    finalResult.isValid = false;
    finalResult.errorMessage = "Diastolic pressure value cannot be less than 60 mmHg";
  }

  if (Number(systolic) > 200) { 
    finalResult.isValid = false;
    finalResult.errorMessage = "Systolic pressure value cannot be greater than 140 mmHg";
  }

  if (Number(diastolic) > 120) {
    finalResult.isValid = false;
    finalResult.errorMessage = "Diastolic pressure value cannot be greater than 90 mmHg";
  }

  return finalResult;
}

