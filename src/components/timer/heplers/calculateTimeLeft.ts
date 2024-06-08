import {TimerFormat} from "../type.ts";

export const calculateTimeLeft = (targetDate: string): TimerFormat => {
    const timeDifference = new Date(targetDate).getTime() - new Date().getTime()
    const defaultResponse: TimerFormat = { days: 0, hours: 0, minutes: 0}

    if (timeDifference > 0) {
        return {
            days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((timeDifference / 1000 / 60) % 60),
        }
    }

    return defaultResponse
};