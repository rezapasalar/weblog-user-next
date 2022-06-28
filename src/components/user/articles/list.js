import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import ItemArticles from './item'
import SimpleLoading from '../../global/loadings/simple'
import Alert from '../../global/elements/alert'
import RefreshSvg from '../../global/svg/refresh'

export default function ListArticles () {

    const {articles} = useSelector(state => state.articles)

    const {isLoading} = useSelector(state => state.global)

    const router = useRouter()

    const {t, i18n: {language}} = useTranslation()

    return (
        <>
            <div className="grid lg:grid-cols-24 grid-cols-12 gap-6">
                {articles.map(article => <ItemArticles key={article.id} {...article} />)}
            </div>
            
            {
                !articles.length 
                    ? 
                        <Alert>
                            {
                                isLoading 
                                    ? 
                                        <div className={`flex items-center ${language === 'fa' && 'space-x-reverse'} space-x-2`}><SimpleLoading /><span>{t('responses.receivingInfo')}</span></div> 
                                    :   
                                        <div className="flex space-x-reverse space-x-2">
                                            <span>{t('responses.emptyData')}</span>
                                            <RefreshSvg onClick={() => router.reload()} className="h-6 w-6 text-indigo-500 cursor-pointer" />
                                        </div>
                            }
                        </Alert> 
                    : null
            }
        </>
    )
}