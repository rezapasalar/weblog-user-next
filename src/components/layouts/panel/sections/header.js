import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { HamburgerSvg, HomeSvg } from '../../../global/svg'
import DarkMode from '../../user/sections/darkMode'
import Notification from '../../user/sections/notification'
import { convertDateToPersianDate } from '../../../../modules/helperFunctions'
import LanguageSelector from '../../user/sections/languageSelector'

export default function Header ({setIsShowSidebar}) {

    const {t, i18n: {language}} = useTranslation()

    return (
        <header className="flex justify-between items-center md:rounded-xl bg-white dark:bg-gray-800 p-5 shadow-md">
            <div className="flex items-center">
                <HamburgerSvg onClick={() => setIsShowSidebar(prevState => !prevState)} className={`h-7 w-7 text-gray-500 dark:text-gray-200 block lg:hidden cursor-pointer ${language === 'fa' ? 'ml-2' : 'mr-2'}`} />
                <span className="text-gray-400 text-sm">
                    <div>{language === 'fa' ? convertDateToPersianDate(Date.now()) : convertDateToPersianDate(Date.now(), 'en') }</div>
                    <div className="text-gray-400/60 text-xs">{t('panel.welcome')}</div>
                </span>
            </div>
            <div className={`flex ${language === 'fa' && 'space-x-reverse'} space-x-3`}>
                <LanguageSelector />
                <Notification />
                <Link href="/"><a><HomeSvg className="h-6 w-6 text-gray-500 dark:text-gray-200 cursor-pointer" /></a></Link>
                <DarkMode />
            </div>
        </header>
    )
}