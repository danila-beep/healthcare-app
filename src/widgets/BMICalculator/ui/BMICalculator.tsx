"use client";
import { useEffect, useState } from "react";
import { BodyMetrics } from "./BodyMetrics";
import { BMIDisplay } from "./BMIDisplay";
import { BodyMeasurements } from "./BodyMeasurements";

export const BMICalculator = () => {
  const height = 170;
  const weight = 70;
  const [bmiValue, setBmiValue] = useState<number>(0);

  useEffect(() => {
    const bmi = Math.round((weight / (height / 100) ** 2) * 10) / 10;
    setBmiValue(bmi);
  }, []);

  return (
    <div className="flex-1 p-10 bg-[#303030] rounded-3xl">
      <h2 className="font-mulish text-xl text-white leading-8 font-normal pb-5">
        BMI Calculator
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 grid-cols-[4fr_5fr]">
        <BodyMetrics height={height} weight={weight} />
        <BMIDisplay bmiValue={bmiValue} onBmiChange={setBmiValue} />
      </div>
      <span className="block w-full h-[1px] bg-gray-600 mt-10 mb-5"></span>
      <BodyMeasurements />
    </div>
  );
};
