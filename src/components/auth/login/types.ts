import { z } from 'zod'
import {singInSchema} from '../schema'

export type SignInFormType = z.infer<typeof singInSchema>