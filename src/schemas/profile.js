import { object, string } from 'yup'
/*import { t } from '../config/i18n'
import { searchUserService } from '../services/users'*/

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

export const profileSchema = object({
    name: string().required(),
    family: string().required(),
    day: string().required(),
    month: string().required(),
    year: string().required(),
    code: string().required().length(10)
    ,mobile: string().required().length(11),
    /*email: string().required().email()
        .test({
            message: () => t('validation.messages.duplicate', {attribute: t('validation.attributes.email')}),
            test: async (email, {parent: {id}}) => {
                const {data: {data}} = await searchUserService('email', email)
                return data.length && data[0].id !== id ? false : true
            }
        })*/
})