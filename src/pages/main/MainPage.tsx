import styles from "./mainPage.module.scss"
import {Container} from "@/components/ui/container";
import {PromotionalCard} from "@/components/promotionalCard";
import {TimerCard} from "@/components/timerCard";
import {SmallCard} from "@/components/ui/card/smallCard";
import {BalanceCard} from "@/components/balanceCard";
import {ScheduleCard} from "@/components/scheduleCard";


export const MainPage = ()=>{

    return(
        <Container className={styles.mainContainer}>
            <div className={styles.cardsContainer}>
                <PromotionalCard/>
                <TimerCard/>
                <div className={styles.container}>
                    <SmallCard title={'main.homework'} iconId={'homework'} background={'secondary'}/>
                    <SmallCard title={'main.reports_from_teachers'} iconId={'report'}/>
                </div>
            </div>
            <div className={styles.cardsContainer}>
                <BalanceCard/>
                <ScheduleCard/>
            </div>
        </Container>

    )

}