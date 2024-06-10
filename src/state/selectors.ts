import {RootState} from "@/state/store.ts";

export const calendarEvents = (state:RootState) => state.calendar.events
 export const isLoading =(state:RootState) => state.app.loading
 export  const errorMessage = (state:RootState) => state.app.error

export  const currentLanguage = (state:RootState) => state.app.language

export const isAuth = (state: RootState) => state.auth.isAuthenticated

export const currentUser = (state: RootState) => state.auth.user