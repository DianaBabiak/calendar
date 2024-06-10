import styles from "./timerCard.module.scss";
import {useTranslation} from "react-i18next";
import {Card} from "@/components/ui/card";
import {Timer} from "@/components/timer";
import {Button} from "@/components/ui/button";

export const TimerCard = () => {
    const {t} = useTranslation()
    const mockEventStartDate = '2024-06-24T00:00:00'

    return (
        <Card className={styles.cardContainer}>
            <span className={styles.text}>{t('main.next_lesson_starts_in')}</span>
            <Timer targetDate={mockEventStartDate}/>
            <Button className={styles.button} isFixedWidth size={'large'}>Button</Button>
        </Card>
    )
}