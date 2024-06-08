import styles from "./promotionalCard.module.scss";
import {Card} from "../Card.tsx";
import cardImg from "../../../../assets/cardImg.png";

export const PromotionalCard = ()=>{
    return(
                <Card className={styles.cardContainer}>
                    <div className={styles.textContainer}>
                        <p className ={styles.mainText}>До 31 декабря любой курс со скидкой 20%</p>
                        <p className={styles.text}>До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!</p>
                    </div>
                    <img src={cardImg} alt={'cardImage'} className={styles.image}/>
                </Card>

    )

}