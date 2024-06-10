import {MenuItem} from "@/types/menu";
import {NavbarItem} from "@/components/ui/navbar/navbarItem";
import styles from "./Navbar.module.scss"
import logo from "../../../assets/logoWithName.png"
import {AdvertsCard} from "@/components/advertsCard";

interface NavbarProps {
    items: MenuItem[];
}

export const Navbar = ({items}: NavbarProps) => {

    return (
        <nav className={styles.container}>
            <div className={styles.logoContainer}>
                <img alt={'logo'} src={logo} className={styles.logo}/>
            </div>
            <div className={styles.itemsContainer}>
                {items.map((item) => (
                    <NavbarItem key={item.name} item={item}/>
                ))}
            </div>
            <AdvertsCard/>
        </nav>
    );
};