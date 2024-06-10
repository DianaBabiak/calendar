import { createSlice, PayloadAction, isAnyOf } from '@reduxjs/toolkit';
import {addEvent, deleteEvent, editEvent, fetchEvents} from "@/state/calendar/calendarSlice.ts";
import {loginUser} from "@/state/auth/authSlice.ts";


interface AppState {
    loading: boolean
    error: string | null
    language: 'ru' | 'en'
}

const initialState: AppState = {
    loading: false,
    error: null,
    language:'ru'
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload
        },
        clearError(state) {
            state.error = null
        },
        setLanguage(state, action: PayloadAction<'ru' | 'en'>) {
            state.language = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                isAnyOf(fetchEvents.pending, addEvent.pending, deleteEvent.pending, editEvent.pending,loginUser.pending),
                (state) => {
                    state.loading = true
                    state.error = null
                }
            )
            .addMatcher(
                isAnyOf(fetchEvents.rejected, addEvent.rejected, deleteEvent.rejected, editEvent.rejected, loginUser.rejected),
                (state, action) => {
                    state.loading = false
                    state.error = action.error.message || 'An error occurred'
                }
            )
            .addMatcher(
                isAnyOf(fetchEvents.fulfilled, addEvent.fulfilled, deleteEvent.fulfilled, editEvent.fulfilled, loginUser.fulfilled),
                (state) => {
                    state.loading = false;
                }
            )
    },
})

export const { setLoading, setError, clearError, setLanguage } = appSlice.actions
export const appReducer = appSlice.reducer
