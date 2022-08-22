import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

import { setArticles } from '../../store/slices/articles'
import { setIsLoading } from '../../store/slices/global'
import { getArticlesService } from '../../services/articles'
import PageWrap from '../../components/global/wraps/page'
import Sidebar from '../../components/user/articles/sidebar'
import ListArticles from '../../components/user/articles/list'
import MoreButton from '../../components/global/elements/moreButton'

export default function Articles () {

    const {articles, pagination: {totalCount, currentPage}} = useSelector(state => state.articles)

    const dispatch = useDispatch()

    const {t} = useTranslation()

    useEffect(() => {
        if (!articles.length) pageChangeHandler(1)
    }, [])

    const pageChangeHandler = useCallback(async (page) => {
        try {
            dispatch(setIsLoading(true))
            const {data: {data, meta: {totalDocs, limit}}} = await getArticlesService(page, 'status:public')
            dispatch(setArticles({page, data, totalDocs, limit}))
        } finally {
            dispatch(setIsLoading(false))
        }
    }, [])

    return (
        <PageWrap>
            <Head>
                <title>{t('menu.articles')}</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <div className="grid grid-cols-12 gap-6">
                <aside className="xl:col-span-3 lg:col-span-4 col-span-12">
                    <Sidebar />
                </aside>

                <main className="xl:col-span-9 lg:col-span-8 col-span-12">
                    <ListArticles />
                    <MoreButton label={t('buttons.moreArticles')} onClick={() => pageChangeHandler(currentPage + 1)} isStill={articles.length < totalCount} />
                </main>
            </div>
        </PageWrap>
    )
}