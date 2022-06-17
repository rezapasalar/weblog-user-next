import { useRouter } from 'next/router'
import { timestampToPersianDate, random } from '../../../modules/helperFunctions'
import { Card, ImgCard, TitleCard, BodyCard, FooterCard } from '../../global/card'
import { CommentSvg, LikeSvg, DisLikeSvg, CalenderSvg } from '../../global/svg'

export default function ItemArticles ({id, title, description, slug, createdAt}) {

    const router = useRouter()

    const showArticleHandler = () => router.push(`/articles/${slug}`)

    return (
        <Card>
            <ImgCard onClick={showArticleHandler} src={`https://picsum.photos/id/${random(160, 180)}/200/300`} />
            
            <TitleCard onClick={showArticleHandler} text={title} />

            <BodyCard onClick={showArticleHandler} text={description} />

            <FooterCard>
                <div className="flex items-center space-x-reverse space-x-1">
                    <CalenderSvg className="h-5 w-5" />
                    <small className="mt-1">{timestampToPersianDate(createdAt)}</small>
                </div>

                <div className="flex space-x-reverse space-x-2">
                    <div className="flex">
                        {id % 2 === 0 ? <LikeSvg className="h-5 w-5" /> : <DisLikeSvg className="h-5 w-5" />}
                        <span className="text-sm pt-[.12rem]">{Number('84').toLocaleString('fa-IR')}</span>
                    </div>

                    <div className="flex">
                        <CommentSvg className="h-5 w-5" />
                        <span className="text-sm pt-[.12rem]">{Number('15').toLocaleString('fa-IR')}</span>
                    </div>
                </div>
            </FooterCard>
        </Card>
    )
}