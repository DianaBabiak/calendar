import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, UnknownAction } from "@reduxjs/toolkit";
import {calendarReducer} from "@/state/calendar/calendarSlice.ts";

export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
    reducer: {
        calendar: calendarReducer,
    },
});

export type AppThunkResult<T = void> = ThunkAction<
    T,
    RootState,
    unknown,
    UnknownAction
>;
export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;