import { z } from 'zod'

export const singInSchema = z.object({
    email: z.string().trim().email({ message: 'Неправильный email' }).nonempty({ message: 'Email обязательный' }),
    password: z.string().trim().nonempty({ message: 'Пароль обязательный' }),
    rememberMe: z.boolean().default(false),
});