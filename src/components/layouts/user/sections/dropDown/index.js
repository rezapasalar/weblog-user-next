import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import DropDownItem from './item'
import { getTheme } from '../../../../../modules/helperFunctions'
import { LoginSvg, RegisterSvg, LogoutSvg, UserSvg, SettingSvg, MoreSvg } from '../../../../global/svg'

export default function DropDown () {

    const router = useRouter()
    
    const [isShow, setIsShow] = useState(false)

    const dropDownRef = useRef(null)

    const {t, i18n: {language}} = useTranslation()

    const clickOutsideHandler = ({target}) => dropDownRef.current && !dropDownRef.current.contains(target) ? setIsShow(false) : null

    useEffect(() => {
        document.addEventListener("mousedown", clickOutsideHandler)
        window.addEventListener("scroll", clickOutsideHandler)
        return () => {
            document.removeEventListener("mousedown", clickOutsideHandler)
            window.removeEventListener("scroll", clickOutsideHandler)
        }
    }, [])

    const logoutHandler = () => {
        setIsShow(false)
        toast.success(t('responses.successfulLogout'), {...getTheme()})
        router.push('/')
    }

    const redirect = (to) => {
        setIsShow(false)
        router.push(to)
    }

    return (
        <div ref={dropDownRef} className="relative z-50">

            <MoreSvg onClick={() => setIsShow(!isShow)} className={`${language === 'fa' ? '-ml-2' : '-mr-2'} h-[1.4rem] w-[1.4rem] text-gray-500 dark:text-gray-100 cursor-pointer`} />

            <div onClick={() => setIsShow(false)} className={`${isShow ? 'block' : 'hidden'} fixed inset-0 top-[60px] animate-slow-200  bg-gray-500/50 dark:bg-gray-900/50`}></div>

            <div className={`${isShow ? 'block' : 'hidden'} -origin-top-left absolute ${language === 'fa' ? 'left-0' : 'right-0'} top-5 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-gray-300/80 dark:ring-gray-700/70 focus:outline-none animate-slow-200`}>
                <DropDownItem position="top" onClick={() => redirect('/auth/register')}>
                    <RegisterSvg className="h-5 w-5" />
                    <span>{t('menu.register')}</span>
                </DropDownItem>

                <DropDownItem onClick={() => redirect('/auth/login')}>
                    <LoginSvg className="h-5 w-5" />
                    <span>{t('menu.login')}</span>
                </DropDownItem>

                <DropDownItem position="top" onClick={() => redirect('/panel')}>
                    <UserSvg className="h-5 w-5" />
                    <span>{t('menu.userPanel')}</span>
                </DropDownItem>

                <DropDownItem onClick={() => redirect('/panel/setting')}>
                    <SettingSvg className="h-5 w-5" />
                    <span>{t('menu.setting')}</span>
                </DropDownItem>

                <DropDownItem position="bottom" onClick={logoutHandler}>
                    <LogoutSvg className="h-5 w-5" />
                    <span>{t('menu.logout')}</span>
                </DropDownItem>
            </div>
            
        </div>
    )
}