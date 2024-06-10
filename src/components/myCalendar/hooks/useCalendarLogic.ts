import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "@/state/store.ts";
import { calendarEvents, errorMessage, isLoading } from "@/state/selectors.ts";
import { addEvent, deleteEvent, editEvent, fetchEvents } from "@/state/calendar/calendarSlice.ts";
import { v1 } from "uuid";
import { Event, EventStatus } from "@/types/calendar.ts"

export const useCalendarLogic = () => {
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
        setAddEditModalTitle('events.new_event')
    }

    const handleSelectEvent = (event: Event) => {
        setSelectedEvent(event)
        setIsOpenInfoEvent(true)
        setAddEditModalTitle('events.edit_event')
    }

    const handleAddEvent = (title: string, start: Date, end: Date, isPay: boolean, status: EventStatus) => {
        if (title && start && end) {
            const event: Event = {
                id: v1(),
                start,
                end,
                title,
                isPay,
                status,
            }
            dispatch(addEvent(event))
            setIsOpenAddEditEvent(false)
        }
    }

    const handleDeleteEvent = (eventId: string) => {
        dispatch(deleteEvent(eventId))
        setIsOpenInfoEvent(false)
        setSelectedEvent(null)
    }

    const handleCloseInfoEventModal = () => {
        setIsOpenInfoEvent(false)
        setSelectedEvent(null)
    }

    const handleOpenEditModal = () => {
        setIsOpenInfoEvent(false)
        setIsOpenAddEditEvent(true)
    }

    const handleEditEvent = (newTitle: string, start: Date, end: Date, isPay: boolean, status: EventStatus, eventId: string | undefined) => {
        if (newTitle && start && end && eventId) {
            const updatedEvent: Event = {
                id: eventId,
                start,
                end,
                title: newTitle,
                isPay,
                status,
            };
            dispatch(editEvent(updatedEvent));
            setSelectedEvent(null)
        }
    }

    return {
        events,
        loading,
        error,
        isOpenAddEditEvent,
        isOpenInfoEvent,
        selectedEvent,
        addEditModalTitle,
        setIsOpenAddEditEvent,
        setIsOpenInfoEvent,
        setSelectedEvent,
        handleSelect,
        handleSelectEvent,
        handleAddEvent,
        handleDeleteEvent,
        handleCloseInfoEventModal,
        handleOpenEditModal,
        handleEditEvent
    }
}
