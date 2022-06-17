import Kind from './kind'
import Categories from './categories'

export default function Sidebar () {
    return (
        <div className="space-y-6 mb-6">
            <Kind />
            <Categories />
        </div>
    )
}