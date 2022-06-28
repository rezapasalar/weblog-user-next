import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: {
        id: 164,
        is_admin: 0,
        name: "میترا",
        family: "ملکیان",
        day: 3,
        month: 'دی',
        year: 1365,
        code: '6598347665',
        mobile: '09332095657',
        email: "mitra@yahoo.com",
    },
    isAuth: true,
    isLoading: false,
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setUserInfo: (state, {payload: info}) => {state.userInfo = info},
        setAuth: (state, {payload: status}) => {state.isAuth = status},
        setIsLoading: (state, {payload: status}) => {state.isLoading = status},
    }
})

export const {setUserInfo, setAuth, setIsLoading} = globalSlice.actions

export default globalSlice.reducer