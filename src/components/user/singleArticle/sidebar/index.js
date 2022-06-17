import RelatedArticles from './relatedArticles'
import RecentArticles from './recentArticles'

export default function Sidebar () {
    return (
        <div className="space-y-6">
            <RelatedArticles />
            <RecentArticles />
        </div>
    )
}