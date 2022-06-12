import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import DropDownItem from './item'
import { LoginSvg, LogoutSvg, UserSvg, SettingSvg, MoreSvg } from '../../../../global/svg'

export default function DropDown () {

    const router = useRouter()
    
    const [isShow, setIsShow] = useState(false)

    const dropDownRef = useRef(null)

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
        router.push('/auth/login')
    }

    const redirect = (to) => {
        setIsShow(false)
        router.push(to)
    }

    return (
        <div ref={dropDownRef} className="relative z-50">

            <MoreSvg onClick={() => setIsShow(!isShow)} className="-ml-2 h-[1.4rem] w-[1.4rem] text-gray-500 dark:text-gray-100 cursor-pointer" />

            <div onClick={() => setIsShow(false)} className={`${isShow ? 'block' : 'hidden'} fixed inset-0 top-[60px] animate-slow-200  bg-gray-500/50 dark:bg-gray-900/50`}></div>

            <div className={`${isShow ? 'block' : 'hidden'} origin-top-left absolute left-0 top-5 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-gray-300/80 dark:ring-gray-700/70 focus:outline-none animate-slow-200`}>
                <DropDownItem position="bottom" onClick={() => redirect('/auth/login')}>
                    <LoginSvg className="h-5 w-5" />
                    <span>ورود | ثبت نام</span>
                </DropDownItem>

                <DropDownItem position="top" onClick={() => redirect('/panel')}>
                    <UserSvg className="h-5 w-5" />
                    <span>پنل کاربری</span>
                </DropDownItem>

                <DropDownItem position="top" onClick={() => redirect('/panel/setting')}>
                    <SettingSvg className="h-5 w-5" />
                    <span>تنظیمات</span>
                </DropDownItem>

                <DropDownItem position="bottom" onClick={logoutHandler}>
                    <LogoutSvg className="h-5 w-5" />
                    <span>خروج</span>
                </DropDownItem>
            </div>
            
        </div>
    )
}