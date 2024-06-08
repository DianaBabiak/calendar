import {createAsyncThunk, createSlice, isAnyOf, PayloadAction} from '@reduxjs/toolkit';
import {
    addEventToBackend,
    deleteEventFromBackend,
    editEventOnBackend,
    fetchEventsFromBackend
} from "@/api/calendarApi.ts";
import {Event} from "@/components/ui/myCalendar"

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
    loading: boolean
    error: string | null
}

const initialState: CalendarState = {
    events: [],
    loading: false,
    error: null,
}

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.fulfilled, (state, action: PayloadAction<Event[]>) => {
                state.loading = false
                state.events = action.payload
            })
            .addCase(addEvent.fulfilled, (state, action: PayloadAction<Event>) => {
                state.loading = false
                state.events.push(action.payload)
            })
            .addCase(deleteEvent.fulfilled, (state, action: PayloadAction<string>) => {
                state.loading = false
                state.events = state.events.filter(event => event.id !== action.payload)
            })
            .addCase(editEvent.fulfilled, (state, action: PayloadAction<Event>) => {
                state.loading = false
                const index = state.events.findIndex(event => event.id === action.payload.id)
                if (index !== -1) {
                    state.events[index] = action.payload
                }
            })
            .addMatcher(
                isAnyOf(fetchEvents.pending, addEvent.pending, deleteEvent.pending, editEvent.pending),
                (state) => {
                    state.loading = true
                    state.error = null
                }
            )
            .addMatcher(
                isAnyOf(fetchEvents.rejected, addEvent.rejected, deleteEvent.rejected, editEvent.rejected),
                (state, action) => {
                    state.loading = false
                    state.error = action.error.message || 'An error occurred'
                }
            )
    },
})

export const calendarReducer = calendarSlice.reducer
