import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import LogoSvg from '../../../global/svg/logo'

export default function Logo () {

    const {t, i18n: {language}} = useTranslation()

    return (
        <div className="flex items-center">
            <Link href="/">
                <a className={`flex items-center ${language === 'fa' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                    <LogoSvg className="h-9 w-9" />
                    <span className={`text-gray-500 dark:text-gray-200 font-semibold ${language === 'fa' ? 'pl-6' : 'pr-6'} `}>{t('layout.appName')}</span>
                </a>
            </Link>
        </div>
    )
}