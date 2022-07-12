import { memo } from 'react'
import RelatedArticles from './relatedArticles'
import RecentArticles from './recentArticles'

export default memo(function Sidebar () {
    return (
        <div className="space-y-6">
            <RelatedArticles />
            <RecentArticles />
        </div>
    )
})