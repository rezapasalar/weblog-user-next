import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

export default function LanguageSelector () {

    const {i18n} = useTranslation()

    const {locale, locales, asPath} = useRouter();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        localStorage.locale = lng
        document.querySelector('html').dir = lng === 'fa' ? 'rtl' : 'ltr'
    }

    return (
        <div>
            {
                locales.map(l => 
                    <div key={l} className={`${i18n.language === 'fa' ? 'mx-2' : 'mx-1'}`}>
                        {
                            locale !== l &&
                                <Link href={asPath} locale={l}>
                                    <a onClick={() => changeLanguage(l)} className="bg-indigo-600 text-white rounded-md px-1">{l.toUpperCase()}</a>
                                </Link>  
                        }
                    </div>
                )
            }
        </div>
    )
}