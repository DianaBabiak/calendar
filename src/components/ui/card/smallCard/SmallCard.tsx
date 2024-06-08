import styles from "./smallCard.module.scss";
import {Card} from "../Card.tsx";
import {Icon} from "../../icon";
import classnames from "classnames";

interface SmallCardProps {
    title:string
    iconId:string
    background?: 'primary' | 'secondary'
}
export const SmallCard = ({title, iconId, background ='primary'}:SmallCardProps)=>{
    const cardContainerClassName = classnames(
        styles.cardContainer,
        { [styles.primary]: background === 'primary' },
        { [styles.secondary]: background === 'secondary' }
    );
    return(
                <Card className={cardContainerClassName}>
                    <div>
                        <span className={styles.text}>{title}</span>
                    </div>
                    <div className={styles.iconContainer}>
                        <Icon iconId={iconId}/>
                    </div>
                </Card>

    )

}