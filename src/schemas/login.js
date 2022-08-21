import * as Yup from 'yup'

export const initialData = {
    email: 'mitra@yahoo.com',
    password: '11111111'
}

export const loginSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(8).max(32)
})