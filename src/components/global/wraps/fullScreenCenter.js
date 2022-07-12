import { memo } from 'react'

export default memo(function FullScreenCenterWrap ({children, className: classes = ''}) {
    return (
        <div className={`h-screen flex flex-col justify-center items-center animate-slow-1000 ${classes}`}>
            {children}
        </div>
    )
})