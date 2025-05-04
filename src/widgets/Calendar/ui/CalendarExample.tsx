"use client";

import { useState } from 'react';
import { Calendar } from './Calendar';
import { useUserEvents } from '../model/hooks/useUserEvents';


export function CalendarExample() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const events = useUserEvents();

    const handleDateChange = (date: Date) => {
        setSelectedDate(date);
        console.log('Selected date:', date);
    };

    return (
        <div className="w-full p-5 bg-white rounded-3xl shadow-md">
            <Calendar
                value={selectedDate}
                onChange={handleDateChange}
                events={events}
                minDate={new Date()}
            />
            {selectedDate && (
                <div className="mt-4">
                    <p>Выбранная дата: {selectedDate.toLocaleDateString()}</p>
                    {events
                        .filter(event =>
                            event.date.toDateString() === selectedDate.toDateString()
                        )
                        .map((event, index) => (
                            <div key={index}>
                                <div
                                    className="mt-2 py-4 px-8 bg-white rounded-xl shadow-md flex justify-between items-center gap-4"
                                >
                                    <div className="flex-1">
                                        <p className="font-semibold">{event.title}</p>
                                        <p className="text-sm text-gray-600">
                                            {event.type}
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-600 p-2 bg-gray-100 rounded-xl">{event.date.toLocaleDateString()}</p>
                                    {event.time && (
                                        <p className="text-sm text-gray-600 p-2 bg-gray-100 rounded-xl">{event.time}</p>
                                    )}
                                </div>
                                {event.description && (
                                    <p className="text-sm text-gray-600">{event.description}</p>
                                )}
                                {event.place && (
                                    <p className="text-sm text-gray-600">{event.place}</p>
                                )}
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    );
} 