import {RootState} from "@/state/store.ts";

export const saveState = (state:RootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        console.log("An error occurred")
    }
};