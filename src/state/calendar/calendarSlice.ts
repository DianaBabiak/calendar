import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
    addEventToBackend,
    deleteEventFromBackend,
    editEventOnBackend,
    fetchEventsFromBackend
} from "@/api/calendarApi.ts";
import {Event} from "@/types/calendar.ts"

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
    return await fetchEventsFromBackend()
})

export const addEvent = createAsyncThunk('events/addEvent', async (newEvent: Event) => {
    return await addEventToBackend(newEvent)
})

export const deleteEvent = createAsyncThunk('events/deleteEvent', async (eventId: string) => {
    return await deleteEventFromBackend(eventId);
})

export const editEvent = createAsyncThunk('events/editEvent', async (updatedEvent: Event) => {
    return await editEventOnBackend(updatedEvent);
})

interface CalendarState {
    events: Event[]
}

const initialState: CalendarState = {
    events: [],
}

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.fulfilled, (state, action: PayloadAction<Event[]>) => {
                state.events = action.payload
            })
            .addCase(addEvent.fulfilled, (state, action: PayloadAction<Event>) => {
                state.events.push(action.payload)
            })
            .addCase(deleteEvent.fulfilled, (state, action: PayloadAction<string>) => {
                state.events = state.events.filter(event => event.id !== action.payload)
            })
            .addCase(editEvent.fulfilled, (state, action: PayloadAction<Event>) => {
                const index = state.events.findIndex(event => event.id === action.payload.id)
                if (index !== -1) {
                    state.events[index] = action.payload
                }
            })
    },
})

export const calendarReducer = calendarSlice.reducer
