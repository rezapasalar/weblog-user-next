import { object, string, number } from 'yup'
import { getCurrentPersianYear } from '../modules/helperFunctions'
import { messages, transfer } from '.'
import { searchUserService } from '../services/users'

const {integer, email} = messages
const currentYear = Number(getCurrentPersianYear('en'))

export const initialData = {
    is_admin: 0,
    name: '',
    family: '',
    day: '',
    month: '',
    year: '',
    code: '',
    mobile: '',
    email: '', 
}

export const profileSchema = () => { 
    return object({
        name: 
            string()
            .required(transfer('required', 'name'))
        ,family:
            string()
            .required(transfer('required', 'family'))
        ,day: 
            number()
            .typeError(transfer('integer', 'name'))
            .required(transfer('required', 'day'))
            .min(1, transfer('min', 'day', 1))
            .max(31, transfer('max', 'day', 31))
        ,month: 
            string()
            .required(transfer('required', 'month'))
        ,year: 
            number(integer)
            .required(transfer('required', 'year'))
            .min(1330, transfer('min', 'year', 1330))
            .max(currentYear, transfer('max', 'year', currentYear))
        ,code:
            string()
            .required(transfer('required', 'code'))
            .length(10, transfer('length', 'code', 10))
        ,mobile:
            string()
            .required(transfer('required', 'code'))
            .length(11, transfer('length', 'mobile', 11))
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
    })
}