export default function Bar ({animationDuration, progress}) {
    return (
        <div 
            className={`fixed left-0 top-0 bg-indigo-600 h-[.2rem] w-full z-50`}
            style={{
                marginLeft: `${(-1 + progress) * 100}%`,
                transition: `margin-left ${animationDuration}ms linear`
            }}>
        </div>
    )
}