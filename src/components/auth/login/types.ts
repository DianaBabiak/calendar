import {z} from 'zod'
import {singInSchema} from "@/components/auth/schema.ts";


export type SignInFormType = z.infer<typeof singInSchema>