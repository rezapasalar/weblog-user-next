import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import DropDownItem from './item'

export default function DropDown () {

    const router = useRouter()
    
    const [isShow, setIsShow] = useState(false)

    const dropDownRef = useRef(null)

    const clickOutsideHandler = ({target}) => dropDownRef.current && !dropDownRef.current.contains(target) ? setIsShow(false) : null

    useEffect(() => {
        document.addEventListener("mousedown", clickOutsideHandler)
        return () => {
            document.removeEventListener("mousedown", clickOutsideHandler)
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

            <svg onClick={() => setIsShow(!isShow)} xmlns="http://www.w3.org/2000/svg" className="-ml-2 h-[1.4rem] w-[1.4rem] text-gray-500 dark:text-gray-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>

            <div onClick={() => setIsShow(false)} className={`${isShow ? 'block' : 'hidden'} fixed inset-0 top-[60px] animate-slow-200  bg-gray-500/50 dark:bg-gray-900/50`}></div>

            <div className={`${isShow ? 'block' : 'hidden'} origin-top-left absolute left-0 top-5 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-gray-300/80 dark:ring-gray-700/70 focus:outline-none animate-slow-200`}>
                <DropDownItem onClick={() => redirect('/auth/register')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                    <span>عضویت</span>
                </DropDownItem>

                <DropDownItem position="bottom" onClick={() => redirect('/auth/login')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
                    <span>ورود</span>
                </DropDownItem>

                <DropDownItem position="top" onClick={() => redirect('/panel')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                    <span>پنل کاربری</span>
                </DropDownItem>

                <DropDownItem position="bottom" onClick={logoutHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    <span>خروج</span>
                </DropDownItem>
            </div>
            
        </div>
    )
}