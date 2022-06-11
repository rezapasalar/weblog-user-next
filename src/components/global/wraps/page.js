export default function PageWrap ({children, className: classes = ''}) {
    return (
        <div className={`container mx-auto animate-slow-1000 ${classes}`}>
            {children}
        </div>
    )
}