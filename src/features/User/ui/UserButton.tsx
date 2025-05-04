"use client";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import { UserDropdown } from "./UserDropdown";
export const UserButton = observer(() => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);




    return (
        <div className="relative" ref={containerRef}>
            <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-3 rounded-2xl bg-white shadow-md cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105" 
            >
                <UserCircleIcon className="w-6 h-6" />
            </button>

            <UserDropdown isOpen={isOpen} onClose={() => setIsOpen(false)}/>

        </div>
    );
}); 