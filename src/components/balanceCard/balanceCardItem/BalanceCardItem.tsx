import styles from "./balanceCardItem.module.scss"
import {useTranslation} from "react-i18next";
interface BalanceCardItemProps {
    title:string
    count:number
}
export const BalanceCardItem = ({title, count}:BalanceCardItemProps)=>{
    const { t } = useTranslation()
    return(
        <div className={styles.container}>
            <span className={styles.text}>{t(title)}</span>
            <div className={styles.count}>{count}</div>
        </div>
    )
}