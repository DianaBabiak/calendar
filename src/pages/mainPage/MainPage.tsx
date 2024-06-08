import styles from "./mainPage.module.scss"
import {Container} from "../../components/ui/container";
import {PromotionalCard} from "../../components/ui/card/promotionalCard";
import {TimerCard} from "../../components/ui/card/timerCard";
import {SmallCard} from "../../components/ui/card/smallCard";
import {BalanceCard} from "../../components/ui/card/balanceCard";
import {ScheduleCard} from "../../components/ui/card/scheduleCard";

export const MainPage = ()=>{
    return(
        <Container className={styles.mainContainer}>
            <div className={styles.cardsContainer}>
                <PromotionalCard/>
                <TimerCard/>
                <div className={styles.container}>
                    <SmallCard title={'Домашние Задания'} iconId={'homework'} background={'secondary'}/>
                    <SmallCard title={'Отчеты от учителей'} iconId={'report'}/>
                </div>
            </div>

            <div className={styles.cardsContainer}>
                <BalanceCard/>
                <ScheduleCard/>
            </div>
        </Container>

    )

}