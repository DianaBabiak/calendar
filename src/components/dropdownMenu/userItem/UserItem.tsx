import {Card} from "@/components/ui/card";
import styles from "./userItem.module.scss"
import {AvailableUser} from "@/components/dropdownMenu/types";
import {useAppSelector} from "@/state/store";
import {currentUser} from "@/state/selectors";
import classNames from "classnames";
import {DEFAULT_PHOTO} from "@/constants/user.ts";
import {useTranslation} from "react-i18next";

interface UserItemProps {
    availableUser: AvailableUser
}

export const UserItem = ({availableUser}: UserItemProps) => {
    const user = useAppSelector(currentUser)
    const {id, photo, name} = availableUser
    const isActive = user?.id === id
    const {t} = useTranslation()

    const userItemClass = classNames(styles.userContainer, {
        [styles.activeUser]: isActive
    });

    return (
        <Card className={userItemClass}>
            <img alt="user" src={photo || DEFAULT_PHOTO} className={styles.userPhoto}/>
            <div className={styles.infoUser}>
                <span className={styles.name}>{name}</span>
                {isActive && <span className={styles.text}>{t('header.this_is_you')}</span>}
            </div>
        </Card>
    );
};
