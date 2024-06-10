import {MenuItem} from '@/types/menu'
import {NavLink} from 'react-router-dom';
import styles from "./NavbarItem.module.scss"
import {Icon} from "@/components/ui/icon";
import {MouseEvent as ReactMouseEvent} from 'react';
import {useTranslation} from "react-i18next";

interface NavbarItemProps {
    item: MenuItem
}

export const NavbarItem = ({item}: NavbarItemProps) => {
    const {t} = useTranslation();
    const {name, url, iconId, isDisabled} = item

    const handleClick = (e: ReactMouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (isDisabled) {
            e.preventDefault()
        }
    }

    return (
        <NavLink
            to={url}
            className={({isActive}) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
            onClick={handleClick}
        >
            <Icon iconId={iconId}/>
            <span className={styles.name}>{t(name)}</span>
        </NavLink>
    )
}
