import { useState } from "react";
import { Calendar, dateFnsLocalizer} from "react-big-calendar";
import ru from "date-fns/locale/ru";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { v1 } from 'uuid'

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Modal } from "../modal";
import {CalendarToolbar} from "../calendarToolbar";



const locales = {
    'ru': ru,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

interface Event {
    id:string
    title: string;
    start: Date;
    end: Date;
}

export const MyCalendar = () => {
    const [events, setEvents] = useState<Event[]>([
        {
            id: v1(),
            title: '10.00-12.00 Ментальная арифметика',
            start: new Date(2024, 5, 5, 10, 0),
            end: new Date(2024, 5, 5, 12, 0),
        },
    ]);

    const [isOpenAddEvent, setIsOpenAddEvent] = useState(false);

    const handleSelect = () => {
        setIsOpenAddEvent(true);
    };

    const handleAddEvent = (newTitle: string, start: Date, end: Date) => {
        if (newTitle && start && end) {
            const formattedStart = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const formattedEnd = end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const event = {
                id:v1(),
                start: start,
                end: end,
                title: `${formattedStart}-${formattedEnd} ${newTitle}`
            };
            setEvents([...events, event]);
            setIsOpenAddEvent(false);
        }
    };

    const eventStyleGetter = () => {
        const background = '#D7F0D6';
        return {
            style: {
                backgroundColor: background,
                border: '0.5px solid #BBE7B9',
                fontFamily: 'Circe Rounded',
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '16.2px',
                textAlign: 'left' as const,
                color: '#323854'
            }
        };
    };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100%' }}
                culture='ru'
                selectable
                onSelectSlot={handleSelect}
                eventPropGetter={eventStyleGetter}
                components={{
                    toolbar: CalendarToolbar,
                }}
            />
            {isOpenAddEvent && (
                <Modal open={isOpenAddEvent} setOpen={setIsOpenAddEvent} handleAddEvent={handleAddEvent} />
            )}
        </div>
    );
};
