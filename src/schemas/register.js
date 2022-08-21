import { object, string, ref } from 'yup'
import { t } from '../config/i18n'
import { searchUserService } from '../services/users'

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

export const registerSchema = object({
    name: string().required(),
    family: string().required(),
    day: string().required(),
    month: string().required(),
    year: string().required(),
    email: string().required().email()
        .test({
            message: () => t('validation.messages.duplicate', {attribute: t('validation.attributes.email')}),
            test: async (email, {parent: {id}}) => {
                const {data: {data}} = await searchUserService('email', email)
                return data.length && data[0].id !== id ? false : true
            }
        }),
    password: string().required().min(8).max(32),
    passwordConfirmation: string().oneOf([ref('password')])
})