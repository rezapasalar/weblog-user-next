import { store } from '../store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
import UserLayout from '../components/layouts/user/userLayout'
import PanelLayout from '../components/layouts/panel/panelLayout'

export default function MyApp ({ Component, pageProps }) {
    const getLayout = page => {
        switch (Component.layout) {
            case 'panel' : return <PanelLayout>{page}</PanelLayout>
            case null : return page
            default : return <UserLayout existInLayout={Component.existInLayout}>{page}</UserLayout>
        }
    }

    return (
        <>
            <ToastContainer rtl={true} position="bottom-right" />
            {
                getLayout(
                    <Provider store={store}>
                        <Component {...pageProps}></Component>
                    </Provider>
                )
            }
        </>
    )
}