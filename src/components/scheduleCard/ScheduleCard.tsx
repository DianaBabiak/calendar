import styles from "./scheduleCard.module.scss";
import {useTranslation} from "react-i18next";
import {Card} from "@/components/ui/card";
import {LESSON_ITEMS} from "@/components/scheduleCard/constants.ts";
import {ScheduleCardItem} from "@/components/scheduleCard/scheduleCardItem";
import {Button} from "@/components/ui/button";

export const ScheduleCard = () => {
    const {t} = useTranslation()
    return (
        <Card className={styles.cardContainer}>
            <span className={styles.title}>{t('main.upcoming_lessons')}</span>
            <div className={styles.itemsContainer}>
                {LESSON_ITEMS.map(lesson => <ScheduleCardItem key={lesson.id} item={lesson}/>)}
            </div>
            <div className={styles.buttonContainer}>
                <Button size={'large'} className={styles.button}>Button</Button>
            </div>
        </Card>

    )

}