import { memo } from 'react'

export default memo(function PageWrap ({children, variant = 'user', className: classes = ''}) {
    return (
        <div className={`max-w-screen-xl w-full mx-auto ${variant === 'user' ? 'px-0 md:px-6' : 'px-0'} animate-slow-1000 ${classes}`}>
            {children}
        </div>
    )
})