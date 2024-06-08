import styles from "./balanceCardItem.module.scss"
interface BalanceCardItemProps {
    title:string
    count:number
}
export const BalanceCardItem = ({title, count}:BalanceCardItemProps)=>{

    return(
        <div className={styles.container}>
            <span className={styles.text}>{title}</span>
            <div className={styles.count}>{count}</div>
        </div>
    )
}