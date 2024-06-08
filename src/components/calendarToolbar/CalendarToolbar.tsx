import { ToolbarProps } from 'react-big-calendar';
import styles from './calendarToolbar.module.scss';
import {Arrow} from "../ui/arrow";

export const CalendarToolbar = ({ label, onNavigate }:ToolbarProps) => {
    return (
        <div className={styles.toolbar}>
            <div className={styles.navigation}>
                <Arrow direction="left" onClick={() => onNavigate('PREV')} />
                <span className={styles.label}>{label}</span>
                <Arrow direction="right" onClick={() => onNavigate('NEXT')} />
            </div>
            <div className={styles.containerToday}>
                <button className={styles.today} type="button" onClick={() => onNavigate('TODAY')}>
                    Сегодня
                </button>
                <button type="button" className={styles.question}>
                    ?
                </button>
            </div>
        </div>
    )
}
