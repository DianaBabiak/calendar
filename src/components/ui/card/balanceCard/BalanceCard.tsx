import styles from "./balanceCard.module.scss";
import {Card} from "../Card.tsx";
import {BalanceCardItem} from "../../balanceCardItem";
import {Button} from "../../button";

interface Balance{
    id:number
    title:string
    count:number
}
export const BalanceCard = ()=>{

    const balance:Balance[] = [{id:1, title:'Ментальная Арифметика', count:32}, {id:2, title:'Программирование', count:0}, {id:1, title:'Скорочтение', count:4}]

    return(
                <Card className={styles.cardContainer}>
                    <span className={styles.title}>Баланс занятий</span>
                    <div className={styles.itemsContainer}>
                        {balance.map(b=><BalanceCardItem key={b.id} title={b.title} count={b.count}/>)}
                    </div>
                    <Button isFullWidth={true} size={'large'} className={styles.button}>Button</Button>
                </Card>

    )

}