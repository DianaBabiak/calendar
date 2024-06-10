import styles from "./scheduleCardItem.module.scss"
import {useTranslation} from "react-i18next";
import {Lesson} from "@/components/scheduleCard/type.ts";
import {Icon} from "@/components/ui/icon";
import {Button} from "@/components/ui/button";

interface ScheduleCardItemProps {
    item: Lesson
}

export const ScheduleCardItem = ({item}: ScheduleCardItemProps) => {
    const {name, day, month, time, teacher} = item

    const {t} = useTranslation()

    return (
        <div className={styles.container}>
            <div className={styles.data}>
                <span className={styles.day}>{day}</span>
                <span className={styles.month}>{t(month)}</span>
            </div>
            <span className={styles.text}>{t(name)}</span>
            <span className={styles.time}>{time}</span>
            <div className={styles.informationTeacherContainer}>
                <Icon iconId={'user'} height={'16px'} width={'16px'} viewBox={'0 0 16b 16'}/>
                <span className={styles.nameTeacher}>{teacher}</span>
            </div>
            <div className={styles.buttonsContainer}>
                <Button className={styles.primaryButton} size={'small'}>Button</Button>
                <Button className={styles.secondaryButton} size={'small'}>Button</Button>
            </div>
        </div>
    )
}