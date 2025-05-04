"use client";

import { useState } from 'react';
import ReactCalendar from 'react-calendar';
import { format, isSameDay } from 'date-fns';
import "./Calendar.css"
import { Value } from 'react-calendar/src/shared/types.js';
import { CalendarEvent } from '@/entities/user/model/user.types';

interface CalendarProps {
    value?: Date | null;
    onChange?: (date: Date) => void;
    className?: string;
    minDate?: Date;
    maxDate?: Date;
    events?: CalendarEvent[];
}

export function Calendar({
    value,
    onChange,
    className,
    minDate,
    maxDate,
    events = []
}: CalendarProps) {
    const [selectedDate, setSelectedDate] = useState<Value>(value || null);

    const handleDateChange = (value: Value, event: React.MouseEvent<HTMLButtonElement>) => {
        setSelectedDate(value);
        if (value && onChange) {
            onChange(value as Date);
        }
    };

    const getTileContent = ({ date }: { date: Date }) => {
        const dayEvents = events.filter(event => isSameDay(event.date, date));
        
        return dayEvents.map((event, index) => (
            <div
                key={index}
                className={`event ${event.type || 'appointment'}`}
                style={event.color ? { backgroundColor: event.color } : undefined}
                title={event.title}
            />
        ));
    };

    const getTileClassName = ({ date }: { date: Date }) => {
        const classNames = ["calendarTile"];
        
        if (selectedDate && isSameDay(date, selectedDate as Date)) {
            classNames.push("selected");
        }
        
        if (isSameDay(date, new Date())) {
            classNames.push("today");
        }
        
        return classNames.join(' ');
    };

    return (
        <div className={`${className || ''}`}>
            <ReactCalendar
                value={selectedDate}
                onChange={handleDateChange}
                minDate={minDate}
                maxDate={maxDate}
                tileContent={getTileContent}
                tileClassName={getTileClassName}
                formatDay={(locale, date) => format(date, 'd')}
            />
        </div>
    );
}
