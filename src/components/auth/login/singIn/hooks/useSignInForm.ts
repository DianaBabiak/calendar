import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useAppDispatch, useAppSelector} from "@/state/store.ts";
import {errorMessage, isLoading} from "@/state/selectors.ts";
import {loginUser} from "@/state/auth/authSlice.ts";
import {singInSchema} from "@/components/auth/schema.ts";
import {SignInFormType} from "@/components/auth/login/types.ts";


export const useSignInForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(singInSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    })

    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useAppDispatch()
    const loading = useAppSelector(isLoading)
    const error = useAppSelector(errorMessage)

    const onSubmit = (data: SignInFormType) => {
        dispatch(loginUser(data))
    }

    const handleClickShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    return {
        register,
        handleSubmit,
        errors,
        showPassword,
        handleClickShowPassword,
        loading,
        error,
        onSubmit,
    }
}
