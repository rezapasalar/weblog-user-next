import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

export default function LanguageSelector () {

    const {i18n: {language, changeLanguage}} = useTranslation()

    const {locale, locales, asPath} = useRouter()

    const changeLang = (lng) => {
        changeLanguage(lng)
        localStorage.locale = lng
        document.querySelector('html').dir = lng === 'fa' ? 'rtl' : 'ltr'
    }

    return (
        <div>
            {
                locales.map(l => 
                    <div key={l} className={`${language === 'fa' ? 'mx-2' : 'mx-1'}`}>
                        {locale !== l &&
                            <Link href={asPath} locale={l}>
                                <a onClick={() => changeLang(l)} className="inline-block h-6 w-[1.6rem] bg-indigo-600 text-white rounded-md pt-[.05rem] mt-[.1rem] text-center">{l.toUpperCase()}</a>
                            </Link>
                        }
                    </div>
                )
            }
        </div>
    )
}