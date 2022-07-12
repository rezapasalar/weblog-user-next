import { memo } from 'react'
import ArticleType from './type'
import ArticleCategory from './categories'

export default memo(function Sidebar () {
    return (
        <div className="space-y-6">
            <ArticleType />
            <ArticleCategory />
        </div>
    )
})