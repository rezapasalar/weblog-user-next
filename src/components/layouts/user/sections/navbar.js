import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Brand from './brand'
import Navigation from './navigation'
import DarkMode from './darkMode'
import Hamburger from './hamburger'
import Dropdown from './dropdown'
import LanguageSelector from './languageSelector'

export default function Navbar () {

    const [isShowMenu, setIsShowMenu] = useState(false)

    const {i18n: {language}} = useTranslation()

    return (
        <nav className="bg-gray-50 dark:bg-gray-800 py-2 lg:py-0">
            <div className="max-w-screen-xl w-full mx-auto px-4 md:px-6">
                <div className="lg:flex justify-between">
                    <div className="flex justify-between">
                        <Brand />
                        <Hamburger isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
                    </div>

                    <div className="flex justify-between lg:flex-grow">
                        <Navigation isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />

                        <div className={`hidden lg:flex justif items-center ${language === 'fa' && 'space-x-reverse'} space-x-2`}>
                            <LanguageSelector />
                            <DarkMode />
                            <Dropdown />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}