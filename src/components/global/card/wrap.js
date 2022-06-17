export default function WrapCard ({children, className: classes = ''}) {
    return (
        <div className={`xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 flex flex-col bg-gray-50 dark:bg-gray-800 md:rounded-lg space-y-3 relative shadow-lg ${classes}`}>
            {children}
        </div>
    )
}