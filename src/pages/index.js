import Head from 'next/head'
import PageWrap from '../components/global/wraps/page'

export default function Home () {
    return (
        <PageWrap>
            <Head>
                <title>صفحه اصلی</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <div className="text-gray-500 dark:text-gray-200">صفحه اصلی</div>
        </PageWrap>
    )
}