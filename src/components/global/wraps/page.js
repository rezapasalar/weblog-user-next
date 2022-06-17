export default function PageWrap ({children, className: classes = ''}) {
    return (
        <div className={`max-w-screen-xl w-full mx-auto px-0 md:px-6 animate-slow-1000 ${classes}`}>
            {children}
        </div>
    )
}