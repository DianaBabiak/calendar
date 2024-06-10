import {TimerFormat} from "./type.ts";

export const TIME_LABEL: Record<keyof TimerFormat, string> = {
    days: 'д',
    hours: 'ч',
    minutes: 'м'
};

export const DAY_TRANSLATE = 1000 * 60 * 60 * 24
export const HOURS_TRANSLATE = 1000 * 60 * 60
export const MINUTES_TRANSLATE = 1000 / 60