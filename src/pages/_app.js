import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { store } from '../store'
import { Provider } from 'react-redux'
import './../i18n'
import { ToastContainer } from 'react-toastify'
import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import UserLayout from '../components/layouts/user/userLayout'
import PanelLayout from '../components/layouts/panel/panelLayout'
import ProgressBar from '../components/global/progressBar'

export default function MyApp ({Component, pageProps}) {

    const [isAnimating, setIsAnimating] = useState(false)

    const {i18n} = useTranslation()

    const router = useRouter()

    useEffect(() => {
        i18n.changeLanguage(router.locale)
    }, [])

    useEffect(() => {
        router.events.on('routeChangeStart', () => setIsAnimating(true))
        router.events.on('routeChangeComplete', () => setIsAnimating(false))
        router.events.on('routeChangeError', () => setIsAnimating(false))

        return () => {
            router.events.off('routeChangeStart', setIsAnimating(true))
            router.events.off('routeChangeComplete', setIsAnimating(false))
            router.events.off('routeChangeError', setIsAnimating(false))
        }
    }, [router])

    const getLayout = page => {
        switch (Component.layout) {
            case 'panel' : return <PanelLayout>{page}</PanelLayout>
            case null : return page
            default : return <UserLayout existInLayout={Component.existInLayout}>{page}</UserLayout>
        }
    }

    return (
        <>
            <ProgressBar isAnimating={isAnimating} />
            <ToastContainer rtl={i18n.language === 'fa' ? true : false } position={i18n.language === 'fa' ? 'bottom-right' : 'bottom-left'} />
            <Provider store={store}>
                {getLayout(<Component {...pageProps}></Component>)}
            </Provider>
        </>
    )
}