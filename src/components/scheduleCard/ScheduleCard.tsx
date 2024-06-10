import styles from "./scheduleCard.module.scss";
import {Card} from "../ui/card/Card.tsx";
import {Button} from "../ui/button";
import {ScheduleCardItem} from "./scheduleCardItem";
import {LESSON_ITEMS} from "./constants.ts";
import {useTranslation} from "react-i18next";

export const ScheduleCard = ()=>{
    const { t } = useTranslation()
    return(
                <Card className={styles.cardContainer}>
                    <span className={styles.title}>{t('main.upcoming_lessons')}</span>
                    <div className={styles.itemsContainer}>
                        {LESSON_ITEMS.map(lesson=> <ScheduleCardItem key={lesson.id} item={lesson} />)}
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button size={'large'} className={styles.button}>Button</Button>
                    </div>
                </Card>

    )

}