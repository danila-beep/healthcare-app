import { useId } from "react";

type InputProps = {
  type: string;
  value: string;
  onChange: (value: string) => void;
  error: string;
  label: string;
  unit?: string;
};

export const Input = ({ type, value, onChange, error, label, unit }: InputProps) => {
  const inputId = useId();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId}>{label}</label>
      <div className="flex items-center gap-2">
        <input
          className="w-full border border-gray-300 rounded-md p-2"
          id={inputId}
          type={type}
          value={value}
          onChange={handleChange}
        />
        {unit && <span className="text-sm text-gray-500">{unit}</span>}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
