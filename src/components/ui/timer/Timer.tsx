import { useState, useEffect } from 'react';
import styles from './timer.module.scss';

interface TimerProps {
    endDate: string
}

interface TimeLeft {
    days: number
    hours: number
    minutes: number
}

export const Timer = ({ endDate }:TimerProps) => {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = new Date(endDate).getTime() - new Date().getTime()
        let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0}

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
            }
        }

        return timeLeft
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000)

        return () => clearInterval(timerId);
    }, [endDate])

    const timerComponents: JSX.Element[] = []

    const labels: { [key in keyof TimeLeft]: string } = {
        days: 'д',
        hours: 'ч',
        minutes: 'м'
    };

    Object.keys(timeLeft).forEach((interval) => {
        const key = interval as keyof TimeLeft;
        if (!timeLeft[key]) {
            return
        }

        timerComponents.push(
            <span key={interval} className={styles.interval}>
        {timeLeft[key]} <span className={styles.label}>{labels[key]}</span>
      </span>
        )
    });

    return (
        <div className={styles.timer}>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    )
}
