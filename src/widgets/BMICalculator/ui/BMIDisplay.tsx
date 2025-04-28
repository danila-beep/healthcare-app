import Image from "next/image";

interface BMIDisplayProps {
  bmiValue: number;
  onBmiChange: (value: number) => void;
}

export const BMIDisplay = ({ bmiValue, onBmiChange }: BMIDisplayProps) => {
  return (
    <div className="col-start-2 row-start-1 row-end-3 bg-[#4A4949] rounded-2xl p-4">
      <p className="font-mulish text-md text-white font-normal pb-2">
        Body Mass Index (BMI)
      </p>
      <div className="flex items-center justify-between text-white mt-2">
        <p className="font-mulish text-2xl text-white font-normal">
          {bmiValue}
        </p>
        <div className="flex items-center justify-between bg-[#D6FFDD] text-black px-2 py-1 rounded-lg text-sm">
          <p>You`re healthy</p>
        </div>
      </div>
      <div className="mt-5">
        <input
          type="range"
          min="15"
          max="40"
          step="0.1"
          value={bmiValue}
          onChange={(e) => onBmiChange(Number(e.target.value))}
          className="range-sm bg-transparent w-full appearance-none accent-[#D16564]"
        />
        <Image
          src="/illustrations/BMIRange.svg"
          alt="Range Slider"
          width={100}
          height={100}
          className="w-full"
        />
        <div className="relative w-full mt-1 text-sm text-white">
          <span className="absolute left-0 top-0">15</span>
          <span className="absolute left-2/10 top-0">18</span>
          <span className="absolute left-5/11 top-0">25</span>
          <span className="absolute left-7/10 top-0">30</span>
          <span className="absolute right-0 top-0">40</span>
        </div>
      </div>
    </div>
  );
} 