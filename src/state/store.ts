import { configureStore } from "@reduxjs/toolkit";
import throttle from 'lodash.throttle';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appReducer} from "./app/appSlice.ts";
import {loadState} from "@/state/utils/loadState.ts";
import {calendarReducer} from "@/state/calendar/calendarSlice.ts";
import {authReducer} from "@/state/auth/authSlice.ts";
import {saveState} from "@/state/utils/saveState.ts";

const persistedState = loadState() || {
    app: {
        loading: false,
        error: null,
        language:'ru'
    },
    auth: {
        user: null,
        isAuthenticated: false,
    }
};
export const store = configureStore({
    reducer: {
        app:appReducer,
        calendar: calendarReducer,
        auth:authReducer
    },
    preloadedState:{
        app:persistedState.app,
        auth:persistedState.auth

    },

});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));