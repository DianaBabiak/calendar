import React, {useState} from 'react';
import styles from './header.module.scss';
import {DropdownMenu} from "@/components/dropdownMenu/DropdownMenu.tsx";
import {Icon} from "@/components/ui/icon";
import {useAppSelector} from "@/state/store.ts";
import {currentUser} from "@/state/selectors.ts";
import classNames from "classnames";
import {DEFAULT_PHOTO} from "@/constants/user.ts";
import {useTranslation} from 'react-i18next';
import {useLocation} from 'react-router-dom';


export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const user = useAppSelector(currentUser)
    const countMessages = 2
    const wrapperClasses = classNames(styles.wrapper, styles.position)

    const {t} = useTranslation()
    const location = useLocation();


    const handleClick = () => {
        setIsOpen(true);
    }

    const isHomePage = location.pathname === '/'
    const headerClasses = classNames(styles.header, {
        [styles.home]: isHomePage,
    })

    return (
        <header className={headerClasses}>
            {isHomePage && (
                <div>
                    <span className={styles.title}>{t('header.welcome')} </span>
                    <span className={styles.name}>{user?.name} </span>
                    <span className={styles.title}>!</span>
                </div>
            )}
            <div className={styles.nav}>
                <div className={wrapperClasses}>
                    <Icon iconId={"message"}/>
                    {countMessages && <span className={styles.badge}>{countMessages}</span>}
                </div>
                <div className={styles.wrapper} onClick={handleClick}>
                    <img className={styles.photo} alt={'userPhoto'} src={user?.photo || DEFAULT_PHOTO}/>
                </div>
                <div onClick={handleClick}>
                    <Icon iconId={"arrow"}/>
                </div>
            </div>
            {isOpen && <DropdownMenu setIsOpen={setIsOpen}/>}
        </header>
    );
};

