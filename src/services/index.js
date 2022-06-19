import axios from 'axios'
import { toast } from 'react-toastify'
import { AXIOS_ERROR } from '../constants/responses'
import { getTheme } from '../modules/helperFunctions'

const baseURL = 'https://6284ab5d6b6c317d5ba7737c.endapi.io'

const instance = axios.create({baseURL, timeout: 5000})

//instance.interceptors.request.use(config => config, error => Promise.reject(error))
instance.interceptors.response.use(config => config, async error => {
    console.log(error)
    toast.error(AXIOS_ERROR, {...getTheme})
    return Promise.reject()
})

export default instance