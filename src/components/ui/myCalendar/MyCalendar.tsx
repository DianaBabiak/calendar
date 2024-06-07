import { useState } from "react"
import { Calendar, dateFnsLocalizer} from "react-big-calendar"
import ru from "date-fns/locale/ru"
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
import { v1 } from 'uuid'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {CalendarToolbar} from "../calendarToolbar"
import {AddEditEventModal} from "../modal/addEventModal"
import {InfoEventModal} from "../modal/infoEventModal"

const locales = {
    'ru': ru,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

export interface Event {
    id:string
    title: string
    start: Date
    end: Date
}

export const MyCalendar = () => {
    const [events, setEvents] = useState<Event[]>([
        {
            id: v1(),
            title: '10.00-12.00 Ментальная арифметика',
            start: new Date(2024, 5, 5, 10, 0),
            end: new Date(2024, 5, 5, 12, 0),
        },
    ])

    const [isOpenAddEditEvent, setIsOpenAddEditEvent] = useState(false)
    const [isOpenInfoEvent, setIsOpenInfoEvent] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
    const [addEditModalTitle, setAddEditModalTitle] = useState('')

    const handleSelect = () => {
        setIsOpenAddEditEvent(true)
        setAddEditModalTitle('Новое событие')
    }

    const handleSelectEvent = (event: Event) => {
        setSelectedEvent(event)
        setIsOpenInfoEvent(true)
        setAddEditModalTitle('Редактирование события')
    }

    const handleAddEvent = (newTitle: string, start: Date, end: Date) => {
        if (newTitle && start && end) {
            const formattedStart = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            const formattedEnd = end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            const event = {
                id:v1(),
                start: start,
                end: end,
                title: `${formattedStart}-${formattedEnd} ${newTitle}`
            };
            setEvents([...events, event])
            setIsOpenAddEditEvent(false)
        }
    }

    const handleDeleteEvent = (eventId: string) => {
        setEvents(events.filter(event => event.id !== eventId))
        setIsOpenInfoEvent(false)
        setSelectedEvent(null)
    }

    const handleCloseInfoEventModal = () => {
        setIsOpenInfoEvent(false);
        setSelectedEvent(null)
    }
    const handleOpenEditModal = ()=>{
        setIsOpenInfoEvent(false)
        setIsOpenAddEditEvent(true)
    }

    const handleEditEvent = (newTitle: string, start: Date, end: Date, eventId: string | undefined) => {
        if (newTitle && start && end) {
            const editedEventIndex = events.findIndex(event => event.id === eventId)
            if (editedEventIndex !== -1) {
                const formattedStart = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                const formattedEnd = end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                const updatedEvent = {
                    ...events[editedEventIndex],
                    start,
                    end,
                    title: `${formattedStart}-${formattedEnd} ${newTitle}`
                }
                const updatedEvents = [...events]
                updatedEvents[editedEventIndex] = updatedEvent
                setEvents(updatedEvents)
                setSelectedEvent(null)
            }
        }
    }

    const eventStyleGetter = () => {
        const background = '#D7F0D6'
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
        }
    }

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
                onSelectEvent={handleSelectEvent}
                onSelectSlot={handleSelect}
                eventPropGetter={eventStyleGetter}
                components={{
                    toolbar: CalendarToolbar,
                }}
            />
            {isOpenAddEditEvent && (
                <AddEditEventModal open={isOpenAddEditEvent} setOpen={setIsOpenAddEditEvent} modalTitle={addEditModalTitle} handleEvent={selectedEvent ? handleEditEvent : handleAddEvent} selectedEvent={selectedEvent}/>

            )}
            {isOpenInfoEvent && (
                <InfoEventModal open={isOpenInfoEvent} setOpen={setIsOpenInfoEvent} event={selectedEvent} handleDeleteEvent={handleDeleteEvent} handleOpenEditModal={handleOpenEditModal} handleClose={handleCloseInfoEventModal}/>

            )}
        </div>
    )
}
