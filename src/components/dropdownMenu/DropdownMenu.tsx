import {Icon} from "@/components/ui/icon";
import styles from "./dropdownMenu.module.scss"
import {UserItem} from "@/components/dropdownMenu/userItem";
import {AVAILABLE_USERS} from "@/components/dropdownMenu/constants.ts";
import {useAppDispatch} from "@/state/store.ts";
import {logout} from "@/state/auth/authSlice.ts";
import {useTranslation} from "react-i18next";

interface DropdownMenuProps {
    setIsOpen: (isOpen: boolean) => void
}

export const DropdownMenu = ({setIsOpen}: DropdownMenuProps) => {
    const dispatch = useAppDispatch()
    const {t} = useTranslation()
    const handleLogout = () => {
        dispatch(logout())
    }

    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <div className={styles.mainContainer}>
            <div className={styles.wrapper}>
                <div onClick={handleClose} className={styles.crossIcon}>
                    <Icon iconId={'cross'}/>
                </div>
                <span className={styles.title}>{t('header.user_switch')}</span>
                <div className={styles.usersContainer}>
                    {AVAILABLE_USERS.map(user => <UserItem key={user.id} availableUser={user}/>)}
                </div>
                <div className={styles.line}></div>
                <div className={styles.exitContainer}>
                    <span onClick={handleLogout} className={styles.link}>{t('header.exit')}</span>
                    <div className={styles.iconExit} onClick={handleLogout}>
                        <Icon iconId={'exit'}/>
                    </div>
                </div>
            </div>


        </div>
    )
}