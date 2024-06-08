import {RootState} from "@/state/store.ts";

export const calendarEvents = (state:RootState) => state.calendar.events
 export const isLoading =(state:RootState) => state.calendar.loading
 export  const errorMessage = (state:RootState) => state.calendar.error