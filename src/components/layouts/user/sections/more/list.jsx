import { useCallback, memo } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import MoreItem from './item'
import { getTheme } from '../../../../../modules/helperFunctions'
import { LoginSvg, RegisterSvg, LogoutSvg, UserSvg, SettingSvg } from '../../../../global/svg'

export default memo(function MoreList ({setIsShow}) {

    const router = useRouter()

    const {t, i18n: {language}} = useTranslation()

    const logoutHandler = () => {
        setIsShow(false)
        toast.success(t('responses.successfulLogout'), {...getTheme()})
        router.push('/')
    }

    const redirect = useCallback((to) => {
        setIsShow(false)
        router.push(to)
    }, [])

    return (
        <div className={`-origin-top-left absolute ${language === 'fa' ? 'left-0' : 'right-0'} top-5 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-gray-300/80 dark:ring-gray-700/70 focus:outline-none animate-slow-200`}>
            <MoreItem position="top" onClick={() => redirect('/auth/register')}>
                <RegisterSvg className="h-5 w-5" />
                <span>{t('menu.register')}</span>
            </MoreItem>

            <MoreItem onClick={() => redirect('/auth/login')}>
                <LoginSvg className="h-5 w-5" />
                <span>{t('menu.login')}</span>
            </MoreItem>

            <MoreItem position="top" onClick={() => redirect('/panel')}>
                <UserSvg className="h-5 w-5" />
                <span>{t('menu.userPanel')}</span>
            </MoreItem>

            <MoreItem onClick={() => redirect('/panel/setting')}>
                <SettingSvg className="h-5 w-5" />
                <span>{t('menu.setting')}</span>
            </MoreItem>

            <MoreItem position="bottom" onClick={logoutHandler}>
                <LogoutSvg className="h-5 w-5" />
                <span>{t('menu.logout')}</span>
            </MoreItem>
        </div>
    )
})