import {TimerFormat} from "@/components/timer/type.ts";
import styles from '../timer.module.scss';
import {TIME_LABEL} from "@/components/timer/constants.ts";

export const renderTimerComponents = (timeLeft: TimerFormat) => {
    const timerComponents: JSX.Element[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        const key = interval as keyof TimerFormat;
        if (!timeLeft[key]) {
            return;
        }

        timerComponents.push(
            <span key={interval} className={styles.interval}>
            {timeLeft[key]} <span className={styles.label}>{TIME_LABEL[key]}</span>
            </span>
        );
    });

    return timerComponents;
};
