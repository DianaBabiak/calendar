import styles from "./scheduleCard.module.scss";
import {Card} from "../Card.tsx";
import {Button} from "../../button";
import {ScheduleCardItem} from "../../scheduleCardItem";

interface Lesson {
    id: number;
    nameLesson: string;
    day: string;
    month: string;
    time: string;
    teacher: string;
}
export const ScheduleCard = ()=>{

    const lessons:Lesson[] = [
        {
            id: 1,
            nameLesson: "Ментальная Арифметика",
            day: "1",
            month: "мая",
            time: "14:00-14:25",
            teacher: "Белкина Инна"
        },
        {
            id: 2,
            nameLesson: "Программирование",
            day: "30",
            month: "октября",
            time: "11:00-11:11",
            teacher: "Животновская Оксана"
        },
        {
            id: 3,
            nameLesson: "Скорочтение",
            day: "16",
            month: "ноября",
            time: "09:00-09:45",
            teacher: "Мин Елена"
        }
    ];

    return(
                <Card className={styles.cardContainer}>
                    <span className={styles.title}>Ближайшие уроки</span>
                    <div className={styles.itemsContainer}>
                        {lessons.map(l=> < ScheduleCardItem
                            key={l.id} day={l.day} month={l.month} nameLesson={l.nameLesson} teacher={l.teacher} time={l.time}
                        />)}
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button size={'large'} className={styles.button}>Button</Button>
                    </div>
                </Card>

    )

}