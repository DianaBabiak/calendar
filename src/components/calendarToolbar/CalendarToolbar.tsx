import {ToolbarProps} from 'react-big-calendar';
import styles from './calendarToolbar.module.scss';
import {Button} from "@/components/ui/button";
import {useTranslation} from "react-i18next";
import {Arrow} from "@/components/ui/arrow";

export const CalendarToolbar = ({label, onNavigate}: ToolbarProps) => {
    const {t} = useTranslation()
    return (
        <div className={styles.toolbar}>
            <div className={styles.navigation}>
                <Arrow direction="left" onClick={() => onNavigate('PREV')}/>
                <span className={styles.label}>{label}</span>
                <Arrow direction="right" onClick={() => onNavigate('NEXT')}/>
            </div>
            <div className={styles.containerToday}>
                <Button className={styles.today} type="button" onClick={() => onNavigate('TODAY')}>
                    {t('calendar.today')}
                </Button>
                <Button className={styles.question}>
                    ?
                </Button>
            </div>
        </div>
    )
}
