import { PasswordInfoCards } from "@/components/passwordInfoCard/PasswordInfoCards.tsx";
import { PreLoader } from "@/components/ui/preloader";
import { Button } from "@/components/ui/button";
import { CustomizedSnackbars } from "../../../customizedSnackbars";
import { ChangeLanguage } from "@/components/changeLanguage";
import { useTranslation } from "react-i18next";
import { useSignInForm } from "@/components/auth/login/singIn/hooks/useSignInForm.ts";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logo from '../../../../assets/logo.png'
import s from "./styles.ts"
import styles from "./signIn.module.scss"
import {Link} from "react-router-dom";

export const SignIn = () => {
    const { t } = useTranslation()
    const { register, handleSubmit, errors, showPassword, handleClickShowPassword, loading, error, onSubmit } = useSignInForm()

    if (loading) {
        return <PreLoader />;
    }

    return (
        <div className={styles.container}>
            {error && <CustomizedSnackbars error={error} isOpen={!!error} />}

            <PasswordInfoCards />

            <img className={styles.logo} alt={'logo'} src={logo} />

            <div className={styles.formContainer}>
                <h1 className={styles.title}>
                    {t('auth.signIn')} Sirius Future
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register('email')}
                        placeholder="E-mail"
                        required
                        fullWidth
                        name="email"
                        error={!!errors.email}
                        helperText={errors.email?.message ?? ''}
                        sx={s.textField}
                    />
                    <TextField
                        {...register('password')}
                        placeholder="Пароль"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        error={!!errors.password}
                        helperText={errors.password?.message ?? ''}
                        sx={s.textField}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >{showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <FormControlLabel
                        sx={s.rememberMeContainer}
                        control={
                        <Checkbox
                            {...register('rememberMe')}
                            sx={s.checkbox}
                        />
                    }
                        label={<Typography variant='subtitle1' sx={s.rememberMeLabel}>{t('auth.remember_me')}</Typography>}
                        />
                    <Button className={styles.button} isFullWidth={true} size={'large'}>
                        {t('auth.sign_in_button')}
                    </Button>
                    <div className={styles.linksContainer}>
                            <Link to="#" className={styles.link}>{t('auth.forgot_password')}</Link>
                            <Link to="#" className={styles.link}>{t("auth.signIn_as_coach")}</Link>
                    </div>
                    <div className={styles.registerLinkContainer}>
                        <span className={styles.link_black}>{t('auth.no_account')}</span>
                        <Link to="#" className={styles.link}>{t("auth.register")}</Link>
                    </div>
                </form>
            </div>
            <ChangeLanguage />
        </div>
    )
}
