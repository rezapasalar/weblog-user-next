import { object, string, ref } from 'yup'
import { messages, transfer } from '.'
import { searchUserService } from '../services/usersService'

const {email, confirmed} = messages

export const initialData = {
    is_admin: 0,
    name: '',
    family: '',
    day: '',
    month: '',
    year: '',
    email: '',
    password: '',
    passwordConfirmation: ''
}

export const registerSchema = () => { 
    return object({
        name: 
            string()
            .required(transfer('required', 'name'))
        ,family:
            string()
            .required(transfer('required', 'family'))
        ,day: 
            string()
            .required(transfer('required', 'day'))
        ,month: 
            string()
            .required(transfer('required', 'month'))
        ,year: 
            string()
            .required(transfer('required', 'year'))
        ,email:
            string()
            .required(transfer('required', 'email'))
            .email(email)
            .test({
                message: () => transfer('duplicate', 'email'),
                test: async (email, {parent: {id}}) => {
                    const {data: {data}} = await searchUserService('email', email)
                    return data.length && data[0].id !== id ? false : true
                }
            })
        ,password:
            string()
            .required(transfer('required', 'password'))
            .min(8, transfer('min', 'password', 8))
            .max(32, transfer('max', 'password', 32))
        ,passwordConfirmation:
            string()
            .oneOf([ref('password'), null], confirmed)
    })
}