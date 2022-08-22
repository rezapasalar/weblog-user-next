import { useSelector } from 'react-redux'
import { UserCircleSvg } from '../../../global/svg'

export default function UserInfo () {

    const {userInfo: {name, family, email}} = useSelector(state => state.global)

    return (
        <div className="flex flex-col items-center w-full">
            <UserCircleSvg className="h-16 w-16 text-gray-300 dark:text-gray-500" />
            <p className="text-gray-400 text-base sm:text-lg font-bold">{name} {family}</p>
            <p className="text-xs sm:text-sm text-gray-400 truncate text-center">{email}</p>
        </div>
    )
}