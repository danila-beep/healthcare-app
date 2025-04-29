import { cn } from "@/shared/lib/utils/styles/cn";
import { Button } from "../Button/Button";

type TabsProps = {
  tabs: TabProps[];
  className?: string;
  handleClick: (value: string) => void;
};

export type TabProps = {
  label: string;
  value: string;
  isActive: boolean;
  accentColor: string;
};

export const Tabs = ({ tabs, className, handleClick }: TabsProps) => {
  const handleTabClick = (value: string) => {
    handleClick(value);
  };

  return (
    <div className={cn("flex items-center justify-start gap-4", className)}>
      {tabs.map((tab) => (
        <Button
          key={tab.value}
          data-active={tab.isActive}
          className={cn(
            "py-2 rounded-xl"
          )}
          style={{
            backgroundColor: tab.isActive ? tab.accentColor : "white",
          }}
          onClick={() => handleTabClick(tab.value)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

