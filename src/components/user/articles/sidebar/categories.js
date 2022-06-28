import { useTranslation } from 'react-i18next'

export default function ArticleCategory () {

    const {t, i18n: {language}} = useTranslation()

    return (
        <div className="bg-white dark:bg-gray-800 md:rounded-xl text-gray-500 dark:text-gray-300 shadow-md p-5">
            <span className="text-gray-500 dark:text-gray-100 text-xl font-bold">{t('articlesPage.articleCategory')}</span>

            <div className="mt-6">
                <div className="flex items-center mb-4">
                    <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${language === 'fa' ? 'ml-3' : 'mr-3'}`}></div>
                    <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">{language === 'fa' ? 'لاراول' : 'Laravel'}</label>
                </div>

                <div className="flex items-center mb-4">
                    <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${language === 'fa' ? 'ml-3' : 'mr-3'}`}></div>
                    <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">{language === 'fa' ? 'دارت' : 'Dart'}</label>
                </div>

                <div className="flex items-center mb-4">
                    <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${language === 'fa' ? 'ml-3' : 'mr-3'}`}></div>
                    <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">{language === 'fa' ? 'جاوااسکریپت' : 'Javascript'}</label>
                </div>

                <div className="flex items-center mb-4">
                    <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${language === 'fa' ? 'ml-3' : 'mr-3'}`}></div>
                    <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">{language === 'fa' ? 'اندروید' : 'Android'}</label>
                </div>

                <div className="flex items-center mb-4">
                    <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${language === 'fa' ? 'ml-3' : 'mr-3'}`}></div>
                    <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">{language === 'fa' ? 'پایتون' : 'Python'}</label>
                </div>

                <div className="flex items-center mb-4">
                    <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${language === 'fa' ? 'ml-3' : 'mr-3'}`}></div>
                    <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">{language === 'fa' ? 'پایگاه داده' : 'Database'}</label>
                </div>

                <div className="flex items-center mb-4">
                    <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${language === 'fa' ? 'ml-3' : 'mr-3'}`}></div>
                    <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">{language === 'fa' ? 'جاوا' : 'Java'}</label>
                </div>
            </div>
        </div>
    )
}