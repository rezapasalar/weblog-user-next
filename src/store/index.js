import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './slices/globalSlice'
import articlesReducer from './slices/articlesSlice'

export const store = configureStore({
    reducer: {
        global: globalReducer,
        articles: articlesReducer,
    }
})