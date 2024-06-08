import styles from "./timerCard.module.scss";
import {Card} from "../Card.tsx";
import {Button} from "../../button";
import {Timer} from "../../timer";

export const TimerCard = ()=>{
    return(
                <Card className={styles.cardContainer}>
                    <span className = {styles.text}>Следующее занятие начнется через:</span>
                    <Timer endDate={'2024-06-24T00:00:00'}/>
                    <Button className={styles.button} isFixedWidth={true} size={'large'}>Button</Button>
                </Card>

    )

}