import { useEffect } from 'react'
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

export default function MyApp ({Component, pageProps}) {

    const {i18n} = useTranslation()

    const {locale} = useRouter()

    useEffect(() => {
        i18n.changeLanguage(locale)
    }, [])

    const getLayout = page => {
        switch (Component.layout) {
            case 'panel' : return <PanelLayout>{page}</PanelLayout>
            case null : return page
            default : return <UserLayout existInLayout={Component.existInLayout}>{page}</UserLayout>
        }
    }

    return (
        <>
            <ToastContainer rtl={i18n.language === 'fa' ? true : false } position={i18n.language === 'fa' ? 'bottom-right' : 'bottom-left'} />
            <Provider store={store}>
                {getLayout(<Component {...pageProps}></Component>)}
            </Provider>
        </>
    )
}