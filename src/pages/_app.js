import '../styles/globals.scss'
import PrimaryLayout from '../components/layouts/primary/primaryLayout'
import PanelLayout from '../components/layouts/panel/panelLayout'

export default function MyApp ({ Component, pageProps }) {
    const getLayout = page => {
        switch (Component.layout) {
            case 'panel' : return <PanelLayout>{page}</PanelLayout>
            case null : return page
            default : return <PrimaryLayout>{page}</PrimaryLayout>
        }
    }

    return getLayout(<Component {...pageProps} />)
}