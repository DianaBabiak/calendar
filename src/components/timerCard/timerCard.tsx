import styles from "./timerCard.module.scss";
import {Card} from "../ui/card";
import {Button} from "../ui/button";
import {Timer} from "../timer";
import {useTranslation} from "react-i18next";

export const TimerCard = () => {
    const { t } = useTranslation()
    const mockEventStartDate = '2024-06-24T00:00:00'

    return (
        <Card className={styles.cardContainer}>
            <span className={styles.text}>{t('main.next_lesson_starts_in')}</span>
            <Timer targetDate={mockEventStartDate} />
            <Button className={styles.button} isFixedWidth size={'large'}>Button</Button>
        </Card>
    )
}