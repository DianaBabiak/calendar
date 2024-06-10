import styles from "./smallCard.module.scss";

import classnames from "classnames";
import {useTranslation} from "react-i18next";
import {Card} from "@/components/ui/card";
import {Icon} from "@/components/ui/icon";

interface SmallCardProps {
    title: string
    iconId: string
    background?: 'primary' | 'secondary'
}

export const SmallCard = ({title, iconId, background = 'primary'}: SmallCardProps) => {
    const {t} = useTranslation()
    const cardContainerClassName = classnames(
        styles.cardContainer,
        {[styles.primary]: background === 'primary'},
        {[styles.secondary]: background === 'secondary'}
    );

    return (
        <Card className={cardContainerClassName}>
            <div>
                <span className={styles.text}>{t(title)}</span>
            </div>
            <div className={styles.iconContainer}>
                <Icon iconId={iconId}/>
            </div>
        </Card>

    )

}