import CommentSvg from '../../../global/svg/comment'
import {useTranslation} from 'react-i18next'

export default function ListComments () {

    const {t} = useTranslation()

    return (
        <div className="flex flex-col justify-center items-center">
            <CommentSvg className="h-16 w-16 text-gray-300" />
            <div className="text-gray-400 text-lg mt-1">{t('responses.noComment')}</div>
        </div>
    )
}