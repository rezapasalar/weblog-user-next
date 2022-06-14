import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsLoading: (state, {payload: status}) => {state.isLoading = status},
    }
})

export const {setIsLoading} = globalSlice.actions

export default globalSlice.reducer