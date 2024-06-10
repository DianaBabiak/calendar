import styles from "./balanceCard.module.scss";
import {Card} from "../ui/card";
import {BalanceCardItem} from "./balanceCardItem";
import {Button} from "../ui/button";
import {BALANCE_ITEMS} from "./constants.ts";
import {useTranslation} from "react-i18next";

export const BalanceCard = ()=>{
    const { t } = useTranslation()
    return(
                <Card className={styles.cardContainer}>
                    <span className={styles.title}>{t('main.lesson_balance')}</span>
                    <div className={styles.itemsContainer}>
                        {BALANCE_ITEMS.map(item=><BalanceCardItem key={item.id} title={item.title} count={item.count}/>)}
                    </div>
                    <Button isFullWidth size={'large'} className={styles.button}>Button</Button>
                </Card>

    )

}