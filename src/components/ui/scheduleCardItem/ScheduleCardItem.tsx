import styles from "./scheduleCardItem.module.scss"
import {Button} from "../button";
import {Icon} from "../icon";
interface ScheduleCardItemProps {
    nameLesson:string
    day:string
    month: string
    time:string
    teacher:string

}
export const ScheduleCardItem = ({nameLesson, day, month, time, teacher}:ScheduleCardItemProps)=>{

    return(
        <div className={styles.container}>
            <div className={styles.data}>
                <span className={styles.day}>{day}</span>
                <span className={styles.month}>{month}</span>
            </div>
            <span className={styles.text}>{nameLesson}</span>
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