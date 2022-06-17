import { useState } from 'react'
import Brand from './brand'
import Navigation from './navigation'
import DarkMode from './darkMode'
import Hamburger from './hamburger'
import DropDown from './dropDown'

export default function Navbar () {

    const [isShowMenu, setIsShowMenu] = useState(false)

    return (
        <nav className="bg-gray-50 dark:bg-gray-800 py-2 lg:py-0">
            <div className="max-w-screen-xl w-full mx-auto px-4 md:px-6">
                <div className="lg:flex justify-between md:space-x-reverse md:space-x-5">
                    <div className="flex justify-between">
                        <Brand />
                        <Hamburger isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
                    </div>

                    <div className="flex justify-between lg:flex-grow">
                        <Navigation isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />

                        <div className="hidden lg:flex items-center space-x-reverse space-x-2">
                            <DarkMode />
                            <DropDown />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}