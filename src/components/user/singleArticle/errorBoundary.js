import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import Alert from '../../../components/global/elements/alert'
import RefreshSvg from '../../../components/global/svg/refresh'

export default function ErrorBoundary ({isError}) {

    const router = useRouter()

    const {t, i18n: {language}} = useTranslation()

    return (
        <>
            {
                isError !== 404
                    ? 
                        <Alert className={`flex ${language === 'fa' && 'space-x-reverse'} space-x-2`}>
                            <span>{t('responses.serverError')}</span>
                            <RefreshSvg onClick={() => router.reload()} className="h-6 w-6 text-indigo-500 cursor-pointer" />
                        </Alert>
                    : 
                        <Alert>{t('responses.noArticle')}</Alert>
            }
        </>
    )
}