import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function UseProgress () {

    const [isAnimating, setIsAnimating] = useState(false)

    const router = useRouter()

    useEffect(() => {
        router.events.on('routeChangeStart', () => setIsAnimating(true))
        router.events.on('routeChangeComplete', () => setIsAnimating(false))
        router.events.on('routeChangeError', () => setIsAnimating(false))

        return () => {
            router.events.off('routeChangeStart', () => setIsAnimating(true))
            router.events.off('routeChangeComplete', () => setIsAnimating(false))
            router.events.off('routeChangeError', () => setIsAnimating(false))
        }
    }, [router])

    return {isAnimating}
}