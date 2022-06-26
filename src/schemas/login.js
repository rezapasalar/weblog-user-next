import { object, string } from 'yup'
import { messages, transfer } from '.'

const {email} = messages

export const initialData = {
    email: 'mitra@yahoo.com',
    password: '11111111'
}

export const loginSchema = () => { 
    return object({
        email:
            string()
            .required(transfer('required', 'email'))
            .email(email)
        ,password:
            string()
            .required(transfer('required', 'password'))
            .min(8, transfer('min', 'password', 8))
            .max(32, transfer('max', 'password', 32))
    })
}