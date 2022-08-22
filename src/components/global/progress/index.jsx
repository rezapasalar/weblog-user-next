import { memo } from 'react'
import { useNProgress } from '@tanem/react-nprogress'

import Container from './container'
import Bar from './bar'

export default memo(function Progress ({isAnimating}) {
    
    const {animationDuration, isFinished, progress} = useNProgress({isAnimating})

    return (
        <Container animationDuration={animationDuration} isFinished={isFinished}>
            <Bar animationDuration={animationDuration} progress={progress} />
        </Container>
    )
})