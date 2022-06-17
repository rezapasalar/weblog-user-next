import Link from 'next/link'
import LogoSvg from '../../../global/svg/logo'

export default function Logo () {
    return (
        <div className="flex items-center">
            <Link href="/">
                <a className="flex items-center space-x-reverse space-x-2">
                    <LogoSvg className="h-9 w-9" />
                    <span className="text-gray-500 dark:text-gray-200 font-semibold">اپ من</span>
                </a>
            </Link>
        </div>
    )
}