import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import '../config'

import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

import { store } from '../store'
import UserLayout from '../components/layouts/user/userLayout'
import PanelLayout from '../components/layouts/panel/panelLayout'
import useProgress from '../hooks/useProgress'
import Progress from '../components/global/progress'

export default function MyApp ({Component, pageProps}) {

    const {isAnimating} = useProgress()

    const {i18n: {language, changeLanguage}} = useTranslation()

    const {locale} = useRouter()

    useEffect(() => {
        changeLanguage(locale)
    }, [])

    const isLanguageFA = () => language === 'fa'

    const getLayout = page => {
        switch (Component.layout) {
            case 'panel' : return <PanelLayout>{page}</PanelLayout>
            case null : return page
            default : return <UserLayout>{page}</UserLayout>
        }
    }

    return (
        <>
            <Progress isAnimating={isAnimating} />
            <ToastContainer rtl={isLanguageFA()} position={isLanguageFA() ? 'bottom-right' : 'bottom-left'} />
            <Provider store={store}>
                {getLayout(<Component {...pageProps}></Component>)}
            </Provider>
        </>
    )
}