import styles from "./promotionalCard.module.scss";
import {Card} from "../ui/card";
import cardImg from "../../assets/spaceWolf.png";
import {useTranslation} from "react-i18next";

export const PromotionalCard = () => {
    const { t } = useTranslation()

    return (
        <Card className={styles.cardContainer}>
            <div className={styles.textContainer}>
                <p className={styles.mainText}>{t('main.discount_offer')}</p>
                <p className={styles.text}>{t('main.discount_details')}</p>
            </div>
            <img src={cardImg} alt={'cardImage'} className={styles.image} />
        </Card>
    )
}
