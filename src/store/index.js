import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './slices/global'
import articlesReducer from './slices/articles'

export const store = configureStore({
    reducer: {
        global: globalReducer,
        articles: articlesReducer,
    }
})