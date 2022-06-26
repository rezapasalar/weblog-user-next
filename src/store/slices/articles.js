import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    articles: [],
    modalStatus: false,
    idForUpdate: null,
    filterValue: 'all',
    selectedRows: [],
    isSelectAll: false,
    pagination: {totalCount: 0, pageSize: 10, currentPage: 1},
}

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setArticles: (state, {payload: {page, data: articles, totalDocs, limit}}) => {
            state.articles = [...state.articles, ...articles]
            state.pagination = {totalCount: totalDocs, pageSize: limit, currentPage: page}
            state.selectedRows = []
            state.isSelectAll = false
        },
        setModalStatus: (state, {payload: status}) => {state.modalStatus = status},
        setFilterValue: (state, {payload: value}) => {state.filterValue = value},
        setSelectedRows: (state, {payload: id}) => {typeof id !== 'number' ? state.selectedRows = [] : state.selectedRows.includes(id) ? state.selectedRows = state.selectedRows.filter(item => item !== id) : state.selectedRows.push(id)},
        setIsSelectAll: (state, {payload: status}) => {state.isSelectAll = status},
        setPagination: (state, {payload: value}) => {state.pagination = value},
        resetArticlesState: (state) => {Object.assign(state, initialState)}
    }
})

export const {
    setArticles,
    setModalStatus,
    setIdForUpdate,
    setFilterValue,
    setSelectedRows,
    setIsSelectAll,
    setPagination,
    resetArticlesState
} = articlesSlice.actions

export default articlesSlice.reducer