import {DAY_TRANSLATE, HOURS_TRANSLATE, MINUTES_TRANSLATE} from "@/components/timer/constants.ts";
import {TimerFormat} from "@/components/timer/type.ts";

export const calculateTimeLeft = (targetDate: string): TimerFormat => {
    const timeDifference = new Date(targetDate).getTime() - new Date().getTime()
    const defaultResponse: TimerFormat = {days: 0, hours: 0, minutes: 0}

    if (timeDifference > 0) {
        return {
            days: Math.floor(timeDifference / (DAY_TRANSLATE)),
            hours: Math.floor((timeDifference / (HOURS_TRANSLATE)) % 24),
            minutes: Math.floor((timeDifference / MINUTES_TRANSLATE) % 60),
        }
    }

    return defaultResponse
};