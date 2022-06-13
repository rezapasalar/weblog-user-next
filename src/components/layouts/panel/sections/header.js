import Link from 'next/link'
import { HamburgerSvg, HomeSvg } from '../../../global/svg'
import DarkMode from '../../primary/sections/darkMode'
import Notification from '../../primary/sections/notification'
import { convertDateToPersianDate } from '../../../../modules/helperFunctions'

export default function Header ({setIsShowSidebar}) {
    return (
        <header className="flex justify-between items-center md:rounded-xl bg-white dark:bg-gray-800 p-5 shadow-md">
            <div className="flex items-center">
                <HamburgerSvg onClick={() => setIsShowSidebar(prevState => !prevState)} className="h-7 w-7 ml-2 text-gray-500 dark:text-gray-200 block lg:hidden cursor-pointer" />
                <span className="text-gray-400 text-sm">
                    <div>{convertDateToPersianDate(Date.now())}</div>
                    <div className="text-gray-400/60 text-xs">به پنل خوش آمدید</div>
                </span>
            </div>
            <div className="flex space-x-reverse space-x-3">
                <Notification />
                <Link href="/"><a><HomeSvg className="h-6 w-6 text-gray-500 dark:text-gray-200 cursor-pointer" /></a></Link>
                <DarkMode />
            </div>
        </header>
    )
}