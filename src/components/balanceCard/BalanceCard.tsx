import styles from "./balanceCard.module.scss";
import {Card} from "../ui/card";
import {BalanceCardItem} from "./balanceCardItem";
import {Button} from "../ui/button";
import {BALANCE_ITEMS} from "./constants.ts";

export const BalanceCard = ()=>{
    return(
                <Card className={styles.cardContainer}>
                    <span className={styles.title}>Баланс занятий</span>
                    <div className={styles.itemsContainer}>
                        {BALANCE_ITEMS.map(item=><BalanceCardItem key={item.id} title={item.title} count={item.count}/>)}
                    </div>
                    <Button isFullWidth size={'large'} className={styles.button}>Button</Button>
                </Card>

    )

}