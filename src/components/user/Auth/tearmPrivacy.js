import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function TearmPrivacy () {

    const {t, i18n: {language}} = useTranslation()

    return (
        <div className="flex justify-center text-xs text-gray-400 py-3">

            <span>{t('loginAndRegisterPage.accept')}</span>
            <Link href="/terms"><a className="mx-1 text-indigo-600">{t('menu.terms')}</a></Link>
            <span>{t('loginAndRegisterPage.and')}</span>
            <Link href="/privacy"><a className="mx-1 text-indigo-600">{t('menu.privacy')}</a></Link>
            <span>{language === 'fa' && 'است'}</span>
        </div>
    )
}