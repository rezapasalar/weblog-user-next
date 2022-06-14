export default function WrapCard ({children, className: classes = ''}) {
    return (
        <div className={`flex flex-col bg-gray-50 dark:bg-gray-800 md:rounded-lg space-y-3 relative shadow-lg ${classes}`}>
            {children}
        </div>
    )
}