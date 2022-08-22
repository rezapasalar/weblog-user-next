import { memo } from 'react'
import Link from 'next/link'
import NotificationSvg from '../../../global/svg/notification'

export default memo(function Notification ({count = 4}) {
    return (
        <div className="text-gray-500 dark:text-gray-100 relative cursor-pointer">
            <Link href="/panel/notifications">
                <a>
                    <span className={`${count ? 'block' : 'hidden'} absolute -top-1 left-3 rounded-full px-1 bg-red-500 text-white text-xs`}>{count.toLocaleString('fa-IR')}</span>
                    <NotificationSvg className="h-6 w-6" />
                </a>
            </Link>
        </div>
    )
})