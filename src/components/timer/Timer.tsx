import {useEffect, useState} from 'react';
import styles from './timer.module.scss';
import {TimerFormat} from "./type.ts";
import {calculateTimeLeft} from "./heplers/calculateTimeLeft.ts";
import {TIME_LABEL} from "./constants.ts";

interface TimerProps {
    targetDate: string
}

export const Timer = ({ targetDate }:TimerProps) => {
    const timerComponents: JSX.Element[] = []
    const [timeLeft, setTimeLeft] = useState<TimerFormat>(calculateTimeLeft(targetDate))

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000)

        return () => clearInterval(timerId);
    }, [targetDate])

    Object.keys(timeLeft).forEach((interval) => {
        const key = interval as keyof TimerFormat;
        if (!timeLeft[key]) {
            return
        }

        timerComponents.push(
            <span key={interval} className={styles.interval}>
        {timeLeft[key]} <span className={styles.label}>{TIME_LABEL[key]}</span>
      </span>
        )
    });

    return (
        <div className={styles.timer}>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    )
}
