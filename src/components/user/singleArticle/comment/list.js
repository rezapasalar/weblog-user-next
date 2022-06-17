import CommentSvg from '../../../global/svg/comment'
import { NO_COMMENT } from '../../../../constants/responses'

export default function ListComments () {
    return (
        <div className="flex flex-col justify-center items-center">
            <CommentSvg className="h-16 w-16 text-gray-300" />
            <div className="text-gray-400 text-lg mt-1">{NO_COMMENT}</div>
        </div>
    )
}