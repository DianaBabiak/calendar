import styles from "./advertsCard.module.scss";
import {Button} from "@/components/ui/button";
import giftImg from "@/assets/giftllustration.png";
import {Card} from "@/components/ui/card";
import {useTranslation} from "react-i18next";


export const AdvertsCard = () => {
    const { t } = useTranslation()
    return (
        <Card className={styles.advertsContainer}>
            <div className={styles.contentCard}>
                <span className={styles.title}>{t('menu.learn_for_free')}</span>
                <p className={styles.content}>{t('menu.refer_friends')}</p>
                <Button className={styles.button} size={'small'}>{t('menu.find_out')}</Button>
            </div>
            <img className={styles.giftImg} alt={'gift'} src={giftImg} />
        </Card>
    )
}