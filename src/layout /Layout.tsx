import { Outlet } from 'react-router-dom'
import styles from "./layout.module.scss";
import { MENU_ITEMS } from "@/constants/menu";
import {Navbar} from "@/components/ui/navbar";
import {Header} from "@/components/header";

export const Layout = () => {
    return (
        <div className={styles.container}>
            <Navbar items={MENU_ITEMS} />
            <div className={styles.content}>
                <Header/>
                <Outlet />
            </div>
        </div>
    );
};