import { useTranslation } from 'react-i18next'

export default function ArticleType () {

    const {t, i18n: {language}} = useTranslation()

    const isLanguageFA = () => language === 'fa'

    return (
        <div className="bg-white dark:bg-gray-800 md:rounded-xl text-gray-500 dark:text-gray-300 shadow-md p-5">
            <span className="text-gray-500 dark:text-gray-100 text-xl font-bold">{t('articlesPage.articleType')}</span>

            <div className="mt-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex">
                        <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${isLanguageFA() ? 'ml-3' : 'mr-3'}`}></div>
                        <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">{isLanguageFA() ? 'رایگان' : 'Free'}</label>
                    </div>
                    <span className="text-gray-400">{isLanguageFA() ? Number('17').toLocaleString('fa-IR') : 17}</span>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <div className="flex">
                        <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${isLanguageFA() ? 'ml-3' : 'mr-3'}`}></div>
                        <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">{isLanguageFA() ? 'فقد نقدی' : 'Cash Only'}</label>
                    </div>
                    <span className="text-gray-400">{isLanguageFA() ? Number('73').toLocaleString('fa-IR') : 73}</span>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <div className="flex">
                        <div className={`bg-gray-200 dark:bg-gray-300 text-gray-800 border-0 border-transparent cursor-pointer rounded-md w-6 h-6 ${isLanguageFA() ? 'ml-3' : 'mr-3'}`}></div>
                        <label className="text-gray-400 dark:text-gray-300 text-base font-medium cursor-pointer">{isLanguageFA() ? 'نقدی و اعضای ویژه' : 'ُSpecial Members'}</label>
                    </div>
                    <span className="text-gray-400">{isLanguageFA() ? Number('89').toLocaleString('fa-IR') : 89}</span>
                </div>
            </div>
        </div>
    )
}