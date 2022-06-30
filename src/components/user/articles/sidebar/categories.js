import { useTranslation } from 'react-i18next'

export default function ArticleCategory () {

    const {t, i18n: {language}} = useTranslation()

    const isLanguageFA = () => language === 'fa'

    return (
        <div className="bg-white dark:bg-gray-800 md:rounded-xl text-gray-500 dark:text-gray-300 shadow-md p-5">
            <span className="text-gray-500 dark:text-gray-100 text-xl font-bold">{t('articlesPage.articleCategory')}</span>

            <div className="mt-6">
                <div className="flex items-center mb-4">
                    <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${isLanguageFA() ? 'ml-3' : 'mr-3'}`}></div>
                    <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">{isLanguageFA() ? 'لاراول' : 'Laravel'}</label>
                </div>

                <div className="flex items-center mb-4">
                    <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${isLanguageFA() ? 'ml-3' : 'mr-3'}`}></div>
                    <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">{isLanguageFA() ? 'دارت' : 'Dart'}</label>
                </div>

                <div className="flex items-center mb-4">
                    <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${isLanguageFA() ? 'ml-3' : 'mr-3'}`}></div>
                    <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">{isLanguageFA() ? 'جاوااسکریپت' : 'Javascript'}</label>
                </div>

                <div className="flex items-center mb-4">
                    <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${isLanguageFA() ? 'ml-3' : 'mr-3'}`}></div>
                    <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">{isLanguageFA() ? 'اندروید' : 'Android'}</label>
                </div>

                <div className="flex items-center mb-4">
                    <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${isLanguageFA() ? 'ml-3' : 'mr-3'}`}></div>
                    <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">{isLanguageFA() ? 'پایتون' : 'Python'}</label>
                </div>

                <div className="flex items-center mb-4">
                    <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${isLanguageFA() ? 'ml-3' : 'mr-3'}`}></div>
                    <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">{isLanguageFA() ? 'پایگاه داده' : 'Database'}</label>
                </div>

                <div className="flex items-center mb-4">
                    <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${isLanguageFA() ? 'ml-3' : 'mr-3'}`}></div>
                    <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">{isLanguageFA() ? 'جاوا' : 'Java'}</label>
                </div>
            </div>
        </div>
    )
}