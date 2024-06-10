import { useTranslation } from 'react-i18next';
import styles from "./changeLanguage.module.scss";
import {useAppDispatch, useAppSelector} from "@/state/store.ts";
import {currentLanguage} from "@/state/selectors.ts";
import {setLanguage} from "@/state/app/appSlice.ts";
export const ChangeLanguage = ()=> {
    const language = useAppSelector(currentLanguage)
    const dispatch = useAppDispatch()
    const {  i18n } = useTranslation();

    const handlerChangeLanguage = (lng: 'en'| 'ru') => {
        i18n.changeLanguage(lng)
        dispatch(setLanguage(lng))
    };


    return (
        <div className={styles.container}>
            <span className={language==='ru'? styles.active : styles.usual} onClick={() => handlerChangeLanguage('ru')}>RU</span>
            <span className={language==='en' ? styles.active : styles.usual} onClick={() => handlerChangeLanguage('en')}>EN</span>
        </div>

    )


}