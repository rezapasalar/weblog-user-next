export default function FooterCard ({children, className: classes = ''}) {
    return (
        <div className={`flex flex-grow items-end justify-between p-3 text-gray-500 dark:text-gray-200 ${classes}`}>
            {children}
        </div>
    )
}