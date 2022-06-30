import { useTranslation } from 'react-i18next'

export default function RecentArticles () {

    const {t, i18n: {language}} = useTranslation()

    const isLanguageFA = () => language === 'fa'

    return (
        <div className="bg-white dark:bg-gray-800 md:rounded-xl text-gray-500 dark:text-gray-300 shadow-md">
            <div className="text-gray-500 dark:text-gray-100 text-xl font-bold p-5">{t('singleArticlePage.recentArticles')}</div>

            <div className="pb-5">
                <div className="bg-gray-50 dark:bg-gray-900/20 hover:bg-gray-100 dark:hover:bg-gray-900/50 px-5 py-2">
                    <p className="text-gray-400 text-base font-medium cursor-pointer">{isLanguageFA() ? 'صفحه‌آرایی و طراحی گرافیک' : 'Page layout and graphic design'}</p>
                </div>

                <div className="hover:bg-gray-100 px-5 dark:hover:bg-gray-900/50 py-2">
                    <p className="text-gray-400 text-base font-medium cursor-pointer">{isLanguageFA() ? 'صفحه‌بندی را به پایان برند' : 'Finish pagination'}</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/20 hover:bg-gray-100 dark:hover:bg-gray-900/50 px-5 py-2">
                    <p className="text-gray-400 text-base font-medium cursor-pointer">{isLanguageFA() ? 'آزمایشی و بی‌معنی در صنعت' : 'Experimental and meaningless in the industry'}</p>
                </div>

                <div className="hover:bg-gray-100 px-5 dark:hover:bg-gray-900/50 py-2">
                    <p className="text-gray-400 text-base font-medium cursor-pointer">{isLanguageFA() ? 'از آنجایی که طراحان عموما' : 'Since designers generally'}</p>
                </div>
            </div>
        </div>
    )
}