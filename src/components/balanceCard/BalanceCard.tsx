import styles from "./balanceCard.module.scss";
import {useTranslation} from "react-i18next";
import {Card} from "@/components/ui/card";
import {BALANCE_ITEMS} from "@/components/balanceCard/constants.ts";
import {Button} from "@/components/ui/button";
import {BalanceCardItem} from "@/components/balanceCard/balanceCardItem";

export const BalanceCard = () => {
    const {t} = useTranslation()
    return (
        <Card className={styles.cardContainer}>
            <span className={styles.title}>{t('main.lesson_balance')}</span>
            <div className={styles.itemsContainer}>
                {BALANCE_ITEMS.map(item => <BalanceCardItem key={item.id} title={item.title} count={item.count}/>)}
            </div>
            <Button isFullWidth size={'large'} className={styles.button}>Button</Button>
        </Card>

    )

}