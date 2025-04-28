type ValidationResult = {
  isValid: boolean;
  error?: string;
  value?: number | string;
};

export const validateBloodPressure = (value: string): ValidationResult => {
  const pattern = /^(\d{2,3})\/(\d{2,3})$/;
  if (!pattern.test(value)) {
    return {
      isValid: false,
      error: "Введите давление в формате '120/80'"
    };
  }

  const [systolic, diastolic] = value.split('/').map(Number);

  if (systolic < 70 || systolic > 200) {
    return {
      isValid: false,
      error: "Систолическое давление должно быть между 70 и 200"
    };
  }

  if (diastolic < 40 || diastolic > 130) {
    return {
      isValid: false,
      error: "Диастолическое давление должно быть между 40 и 130"
    };
  }

  return {
    isValid: true,
    value
  };
};

export const validateNumericValue = (
  value: string,
  min: number,
  max: number,
  metricName: string
): ValidationResult => {
  const numValue = Number(value);

  if (isNaN(numValue)) {
    return {
      isValid: false,
      error: "Пожалуйста, введите числовое значение"
    };
  }

  if (numValue < min || numValue > max) {
    return {
      isValid: false,
      error: `${metricName} должно быть между ${min} и ${max}`
    };
  }

  return {
    isValid: true,
    value: numValue
  };
};

export const validateHealthMetric = (
  value: string,
  metricType: string,
  metricName: string
): ValidationResult => {
  if (!value.trim()) {
    return {
      isValid: false,
      error: "Пожалуйста, введите значение"
    };
  }

  switch (metricType) {
    case "blood_pressure":
      return validateBloodPressure(value);
    case "weight":
      return validateNumericValue(value, 30, 300, metricName);
    case "height":
      return validateNumericValue(value, 50, 250, metricName);
    case "temperature":
      return validateNumericValue(value, 35, 42, metricName);
    case "pulse":
      return validateNumericValue(value, 40, 200, metricName);
    default:
      return validateNumericValue(value, 0, 1000, metricName);
  }
}; 