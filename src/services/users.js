import axios from '.'

const route = 'users'

export const createUserService = async data => await axios.post(route, filterPassConf(data))

export const updateUserService = async data => await axios.put(`${route}/${data.id}`, data)

export const getUsersService = async (page = 1, filter = null, sort = 'created_at:-1') => await axios.get(`${route}?page=${page}${filter && `&filter=${filter}`}&sort=${sort}`)

export const searchUserService = async (key, value) => await axios.get(`${route}?search=${key}:${value}`)

const filterPassConf = (data) => Object.fromEntries(Object.entries(data).filter(([key]) => !key.includes('passwordConfirmation')))

const filterPass = (data) => Object.fromEntries(Object.entries(data).filter(([key]) => !key.includes('password') && (!data.password.length)))