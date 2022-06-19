import { random, timestampToPersianDate } from '../../../modules/helperFunctions'
import { CalenderSvg, CommentSvg, LikeSvg, DisLikeSvg } from '../../global/svg'

export default function ShowArticle ({article}) {
    return (
        <div className="bg-white dark:bg-gray-800 md:rounded-xl space-y-5 shadow-md">
            <div className="md:p-5"><img className="w-full md:rounded-xl" src={`https://picsum.photos/id/${random(160, 180)}/300/100`} /></div>
            <h1 className="text-gray-600 dark:text-gray-300 text-xl font-semibold px-4 md:px-5">{article.title}</h1>
            <p className="text-gray-500 dark:text-gray-300 text-justify leading-[2.5rem] px-4 md:px-5">{article.body}</p>
            <div className="flex flex-grow items-end justify-between text-gray-500 dark:text-gray-200 p-4 md:p-5">
                <div className="flex items-center space-x-reverse space-x-1">
                    <CalenderSvg className="h-6 w-6" />
                    <span className="mt-1">{timestampToPersianDate(article.createdAt)}</span>
                </div>
                <div className="flex space-x-reverse space-x-3">
                    <div className="flex">
                        {article.id % 2 === 0 ? <LikeSvg className="h-6 w-6" /> : <DisLikeSvg className="h-6 w-6" />}
                        <span className="text-sm pt-[.12rem]">{Number('84').toLocaleString('fa-IR')}</span>
                    </div>
                    <div className="flex">
                        <CommentSvg className="h-6 w-6" />
                        <span className="text-sm pt-[.12rem]">{Number('15').toLocaleString('fa-IR')}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}