import axios from '.'
import configApp from '../config/app'

const route = '/articles'

const baseURL = configApp.baseURL

export const createArticleService = async data => await axios.post(route, data)

export const updateArticleService = async data => await axios.put(`${route}/${data.id}`, data)

export const deleteArticleService = async articleId => await axios.delete(`${route}/${articleId}`)

export const getArticlesService = async (page = 1, filter = null, sort = 'created_at:-1') => await axios.get(`${route}?page=${page}${filter && `&filter=${filter}`}&sort=${sort}`)

export const searchArticleService = async (key, value) => await axios.get(`${route}?search=${key}:${value}`)

export const searchArticleServiceWithFetch = async (key, value) => {
    const res = await fetch(`${baseURL}${route}?search=${key}:${value}`)
    return await res.json()
}

export const getArticlesServiceFetch = async (page = 1, filter = null, sort = 'createdAt:-1') => {
    const res = await fetch(`${baseURL}${route}?page=${page}${filter && `&filter=${filter}`}&sort=${sort}`)
    return await res.json()
}