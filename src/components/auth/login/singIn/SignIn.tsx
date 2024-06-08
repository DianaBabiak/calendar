import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { singInSchema } from '../../schema';
import { SignInFormType } from '../types';
import styles from './signIn.module.scss';
import logo from '../../../../assets/logo.png'

import s from './styles';
import {Button} from "@/components/ui/button";

export const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(singInSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    })

    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const onSubmit = (data: SignInFormType) => {
        console.log(data)
    };

    return (
        <Box sx={s.container}>
            <img className={styles.logo} alt={'logo'} src={logo}/>
            <Box sx={s.formContainer}>
                <Typography component="h1" variant="h5" sx={s.title}>
                    Вход в Sirius Future
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
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
                        label={<Typography variant='subtitle1' sx={s.rememberMeLabel}>Запомнить меня</Typography>}
                    />
                    <Button className={styles.button} isFullWidth={true} size={'large'}>
                        Войти
                    </Button>
                    <Grid container mb={8}>
                        <Grid item xs>
                            <Link href="#" underline="none" sx={s.link}>Я забыл пароль</Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" underline="none" sx={s.link}>Войти как тренер</Link>
                        </Grid>
                    </Grid>
                    <Box display='flex' justifyContent='center' mb={1}>
                        <Link href="#" underline="none" sx={s.link_black}>Нет аккаунта?</Link>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Link href="#" underline="none" sx={s.link}>Зарегистрироваться</Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
