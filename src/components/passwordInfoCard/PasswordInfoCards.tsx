import {Card} from "@/components/ui/card";
import styles from "./passwordInfoCard.module.scss"
import {useTranslation} from 'react-i18next';

export const PasswordInfoCards = () => {
    const {t} = useTranslation()

    return (
        <Card className={styles.card}>
            <span className={styles.text}>{t('auth.login')}: test@test.com</span>
            <span className={styles.text}>{t('auth.password')}: password</span>
        </Card>
    )
}