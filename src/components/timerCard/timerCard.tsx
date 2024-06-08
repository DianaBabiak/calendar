import styles from "./timerCard.module.scss";
import {Card} from "../ui/card";
import {Button} from "../ui/button";
import {Timer} from "../timer";

export const TimerCard = ()=>{
    const mockEventStartDate = '2024-06-24T00:00:00'

    return(
                <Card className={styles.cardContainer}>
                    <span className = {styles.text}>Следующее занятие начнется через:</span>
                    <Timer targetDate={mockEventStartDate}/>
                    <Button className={styles.button} isFixedWidth size={'large'}>Button</Button>
                </Card>

    )

}