import {v1} from "uuid";
import {Event, EventStatus} from "@/types/calendar.ts"

export const fetchEventsFromBackend = async (): Promise<Event[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: v1(),
                    title: 'Ментальная арифметика',
                    start: new Date(2024, 5, 5, 10, 0),
                    end: new Date(2024, 5, 5, 12, 0),
                    isPay: false,
                    status: EventStatus.Planned,
                },
                {
                    id: v1(),
                    title: 'Ментальная арифметика',
                    start: new Date(2024, 5, 6, 14, 0),
                    end: new Date(2024, 5, 6, 15, 0),
                    isPay: true,
                    status: EventStatus.Conducted,
                },
                {
                    id: v1(),
                    title: 'Ментальная математика',
                    start: new Date(2024, 5, 7, 17, 0),
                    end: new Date(2024, 5, 7, 18, 30),
                    isPay: false,
                    status: EventStatus.Cancellation,
                },
                {
                    id: v1(),
                    title: 'Ментальная арифметика',
                    start: new Date(2024, 5, 8, 9, 0),
                    end: new Date(2024, 5, 8, 11, 0),
                    isPay: true,
                    status: EventStatus.Skip,
                },
                {
                    id: v1(),
                    title: 'Ментальная арифметика',
                    start: new Date(2024, 5, 9, 19, 0),
                    end: new Date(2024, 5, 9, 21, 0),
                    isPay: true,
                    status: EventStatus.Available,
                },
                {
                    id: v1(),
                    title: 'Ментальная арифметика',
                    start: new Date(2024, 5, 10, 10, 0),
                    end: new Date(2024, 5, 10, 18, 0),
                    isPay: false,
                    status: EventStatus.Busy,
                },
            ])
        }, 1000);
    })
}

export const addEventToBackend = async (newEvent: Event): Promise<Event> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(newEvent)
        }, 500)
    })
}

export const deleteEventFromBackend = async (eventId: string): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(eventId);
        }, 500)
    })
}

export const editEventOnBackend = async (updatedEvent: Event): Promise<Event> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(updatedEvent)
        }, 500)
    })
}