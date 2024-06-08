import {v1} from "uuid";
import {Event} from "../components/myCalendar"

export const fetchEventsFromBackend = async (): Promise<Event[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: v1(),
                    title: '10.00-12.00 Ментальная арифметика',
                    start: new Date(2024, 5, 5, 10, 0),
                    end: new Date(2024, 5, 5, 12, 0),
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