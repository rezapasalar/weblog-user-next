import { toast } from 'react-toastify'
import Brand from '../../user/sections/brand'
import UserInfo from './userInfo'
import NavLink from './navLink'
import { HomeSvg, UserSvg, SettingSvg, LogoutSvg, CloseSvg } from '../../../global/svg'
import { SUCCESSFUL_LOGOUT } from '../../../../constants/responses'
import { getTheme } from '../../../../modules/helperFunctions'

export default function Sidebar ({setIsShowSidebar}) {

    const logoutHandler = () => {
        toast.success(SUCCESSFUL_LOGOUT, {...getTheme()})
    }

    return (
        <aside className="flex flex-col items-center min-h-screen lg:min-h-fit w-9/12 sm:w-5/12 lg:w-full bg-white dark:bg-gray-800 lg:rounded-xl px-4 py-7 md:p-7 space-y-4 md:space-y-8">
            <div className="flex justify-between lg:justify-center items-center w-full">
                <Brand />
                <CloseSvg onClick={() => setIsShowSidebar(false)} className="h-7 w-7 text-gray-300 dark:text-gray-500 cursor-pointer block lg:hidden" />
            </div>

            <UserInfo />
            
            <div className="w-full space-y-2">
                <NavLink href="/panel" label="اصلی" icon={<HomeSvg />} onClick={() => setIsShowSidebar(false)} />
                <NavLink href="/panel/profile" label="پروفایل" icon={<UserSvg />} onClick={() => setIsShowSidebar(false)} />
                <NavLink href="/panel/setting" label="تنظیمات" icon={<SettingSvg />} onClick={() => setIsShowSidebar(false)} />
                <NavLink href="/" label="خروج" icon={<LogoutSvg />} onClick={logoutHandler} />
            </div>
        </aside>
    )
}