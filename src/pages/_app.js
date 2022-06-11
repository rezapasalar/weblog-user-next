import '../styles/globals.scss'
import PrimaryLayout from '../components/layouts/primary/primaryLayout'

export default function MyApp ({ Component, pageProps }) {
    const getLayout = Component.getLayout || (page => <PrimaryLayout>{page}</PrimaryLayout>)
    return getLayout(<Component {...pageProps} />)
}