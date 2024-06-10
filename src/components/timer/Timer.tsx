import {useEffect, useState} from 'react';
import styles from './timer.module.scss';
import {TimerFormat} from "./type.ts";
import {calculateTimeLeft} from "./heplers/calculateTimeLeft.ts";
import {renderTimerComponents} from "@/components/timer/heplers/renderTimerComponents.tsx";

interface TimerProps {
    targetDate: string
}

export const Timer = ({ targetDate }:TimerProps) => {
    const [timeLeft, setTimeLeft] = useState<TimerFormat>(calculateTimeLeft(targetDate))

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000)

        return () => clearInterval(timerId);
    }, [targetDate])

    const timerComponents = renderTimerComponents(timeLeft)

    return (
        <div className={styles.timer}>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    )
}
