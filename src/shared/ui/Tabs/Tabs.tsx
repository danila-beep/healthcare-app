"use client";
import { cn } from "@/shared/lib/utils/cn";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export const Tabs = ({ tabs, activeTab, onTabChange, className }: TabsProps) => {
  return (
    <div className={cn("flex gap-3", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer",
            "font-mulish text-sm",
            activeTab === tab.id
              ? `${
                tab.id === "1" 
                  ? "bg-[#F8DEBD]" 
                  : tab.id === "2" 
                    ? "bg-[#FBF0F3]" 
                    : "bg-[#D0FBFF]"
              }`
              : "bg-transparent text-gray-600 hover:bg-gray-100"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}; 