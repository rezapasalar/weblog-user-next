import { useTranslation } from 'react-i18next'

export default function RelatedArticles () {

    const {t, i18n: {language}} = useTranslation()

    const isLanguageFA = () => language === 'fa'

    return (
        <div className="bg-white dark:bg-gray-800 md:rounded-xl text-gray-500 dark:text-gray-300 shadow-md">
            <div className="text-gray-500 dark:text-gray-100 text-xl font-bold p-5">{t('singleArticlePage.relatedArticles')}</div>

            <div className="pb-5">
                <div className="bg-gray-50 dark:bg-gray-900/20 hover:bg-gray-100 dark:hover:bg-gray-900/50 px-5 py-2">
                    <p className="text-gray-400 text-sm font-medium cursor-pointer">{isLanguageFA() ? 'سفارش گرفته شده استفاده' : 'Order taken use'}</p>
                </div>

                <div className="hover:bg-gray-100 px-5 dark:hover:bg-gray-900/50 py-3">
                    <p className="text-gray-400 text-sm font-medium cursor-pointer">{isLanguageFA() ? 'حق تکثیر متون را ندارند و' : 'They do not have the right to reproduce texts and'}</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/20 hover:bg-gray-100 dark:hover:bg-gray-900/50 px-5 py-2">
                    <p className="text-gray-400 text-sm font-medium cursor-pointer">{isLanguageFA() ? 'تا از نظر گرافیکی نشانگر' : 'Graphically markers'}</p>
                </div>

                <div className="hover:bg-gray-100 px-5 dark:hover:bg-gray-900/50 py-3">
                    <p className="text-gray-400 text-sm font-medium cursor-pointer">{isLanguageFA() ? 'طراح گرافیک از این متن' : 'Graphic designer of this text'}</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/20 hover:bg-gray-100 dark:hover:bg-gray-900/50 px-5 py-2">
                    <p className="text-gray-400 text-sm font-medium cursor-pointer">{isLanguageFA() ? 'حق تکثیر متون را ندارند' : 'They do not have the right to reproduce texts'}</p>
                </div>

                <div className="hover:bg-gray-100 px-5 dark:hover:bg-gray-900/50 py-3">
                    <p className="text-gray-400 text-sm font-medium cursor-pointer">{isLanguageFA() ? 'ظاهر متن باشد. معمولا طراحان' : 'The appearance of the text.'}</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/20 hover:bg-gray-100 dark:hover:bg-gray-900/50 px-5 py-2">
                    <p className="text-gray-400 text-sm font-medium cursor-pointer">{isLanguageFA() ? 'با استفاده از محتویات ساختگی' : 'Using fake content'}</p>
                </div>
            </div>
        </div>
    )
}