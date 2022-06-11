import { useState } from 'react'
import Logo from './logo'
import Navigation from './navigation'
import DarkMode from './darkMode'
import Hamburger from './hamburger'
import DropDown from './dropDown'

export default function Navbar () {

    const [isShowMenu, setIsShowMenu] = useState(false)

    return (
        <nav className="bg-white dark:bg-gray-800 py-2 md:py-0">
            <div className="container mx-auto px-4 md:px-0">
                <div className="md:flex justify-between md:space-x-reverse md:space-x-5">
                    <div className="flex justify-between">
                        <Logo />
                        <Hamburger isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
                    </div>

                    <div className="flex justify-between md:flex-grow">
                        <Navigation isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />

                        <div className="hidden md:flex items-center space-x-reverse space-x-2">
                            <DarkMode />
                            <DropDown />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}