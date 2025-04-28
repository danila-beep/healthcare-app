"use client";
import { cn } from "@/shared/lib/utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Input = ({ label, error, className, ...props }: InputProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <label className="font-mulish text-sm text-black">
          {label}
        </label>
      )}
      <input
        className={cn(
          "px-4 py-2 rounded-lg border",
          "font-mulish text-sm",
          "transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-black/10",
          error ? "border-red-500" : "border-gray-200",
          "placeholder:text-gray-400"
        )}
        {...props}
      />
      {error && (
        <span className="font-mulish text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}; 