import { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import ru from 'date-fns/locale/ru';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarToolbar } from '../calendarToolbar';
import { AddEditEventModal } from '../modal/addEventModal';
import { InfoEventModal } from '../modal/infoEventModal';
import styles from './myCalendar.module.scss';
import {useAppDispatch, useAppSelector} from "@/state/store.ts";
import {calendarEvents, errorMessage, isLoading} from "@/state/selectors.ts";
import {addEvent, deleteEvent, editEvent, fetchEvents} from "@/state/calendar/calendarSlice.ts";
import {v1} from "uuid";
import {PreLoader} from "@/components/ui/preloader";


const locales = {
    ru: ru,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});
export interface Event {
    id:string
    title: string
    start: Date
    end: Date
}

export const MyCalendar = () => {
    const dispatch = useAppDispatch()
    const events = useAppSelector(calendarEvents)
    const loading = useAppSelector(isLoading)
    const error = useAppSelector(errorMessage)

    const [isOpenAddEditEvent, setIsOpenAddEditEvent] = useState(false)
    const [isOpenInfoEvent, setIsOpenInfoEvent] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
    const [addEditModalTitle, setAddEditModalTitle] = useState('')

    useEffect(() => {
        dispatch(fetchEvents())
    }, [dispatch])

    const handleSelect = () => {
        setIsOpenAddEditEvent(true)
        setAddEditModalTitle('Новое событие')
    };

    const handleSelectEvent = (event: Event) => {
        setSelectedEvent(event)
        setIsOpenInfoEvent(true)
        setAddEditModalTitle('Редактирование события')
    };

    const handleAddEvent = (newTitle: string, start: Date, end: Date) => {
        if (newTitle && start && end) {
            const formattedStart = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            const formattedEnd = end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            const event = {
                id: v1(),
                start: start,
                end: end,
                title: `${formattedStart}-${formattedEnd} ${newTitle}`,
            }
            dispatch(addEvent(event))
            setIsOpenAddEditEvent(false)
        }
    };

    const handleDeleteEvent = (eventId: string) => {
        dispatch(deleteEvent(eventId))
        setIsOpenInfoEvent(false)
        setSelectedEvent(null)
    };

    const handleCloseInfoEventModal = () => {
        setIsOpenInfoEvent(false)
        setSelectedEvent(null)
    };

    const handleOpenEditModal = () => {
        setIsOpenInfoEvent(false)
        setIsOpenAddEditEvent(true)
    };

    const handleEditEvent = (newTitle: string, start: Date, end: Date, eventId: string | undefined) => {
        if (newTitle && start && end && eventId) {
            const formattedStart = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            const formattedEnd = end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            const updatedEvent = {
                id: eventId,
                start,
                end,
                title: `${formattedStart}-${formattedEnd} ${newTitle}`,
            };
            dispatch(editEvent(updatedEvent))
            setSelectedEvent(null)
        }
    };

    const eventStyleGetter = () => {
        return {
            style: {
                backgroundColor: '#D7F0D6',
                border: '0.5px dashed #BBE7B9',
                borderRadius: '2px',
                fontFamily: 'Circe Rounded',
                fontSize: '10px',
                fontWeight: '400',
                lineHeight: '8px',
                textAlign: 'left' as const,
                color: '#323854',
            },
        }
    }

    if (loading) {
        return <PreLoader />
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div className={styles.container}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100%' }}
                culture="ru"
                selectable
                onSelectEvent={handleSelectEvent}
                onSelectSlot={handleSelect}
                eventPropGetter={eventStyleGetter}
                components={{
                    toolbar: CalendarToolbar,
                }}
            />
            {isOpenAddEditEvent && (
                <AddEditEventModal
                    open={isOpenAddEditEvent}
                    setOpen={setIsOpenAddEditEvent}
                    modalTitle={addEditModalTitle}
                    handleEvent={selectedEvent ? handleEditEvent : handleAddEvent}
                    selectedEvent={selectedEvent}
                />
            )}
            {isOpenInfoEvent && (
                <InfoEventModal
                    open={isOpenInfoEvent}
                    setOpen={setIsOpenInfoEvent}
                    event={selectedEvent}
                    handleDeleteEvent={handleDeleteEvent}
                    handleOpenEditModal={handleOpenEditModal}
                    handleClose={handleCloseInfoEventModal}
                />
            )}
        </div>
    )
}


