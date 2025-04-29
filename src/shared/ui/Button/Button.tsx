import { cn } from "@/shared/lib/utils/styles/cn";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "tertiary";
    size?: "small" | "medium" | "large";
    style?: React.CSSProperties;
}

export const Button = ({ children, className, style, ...props }: ButtonProps) => {
  return <button className={cn("text-md font-normal bg-white rounded-2xl p-4 shadow-md cursor-pointer hover:shadow-lg transition-all duration-200", className)} style={style} {...props}>{children}</button>;
};
