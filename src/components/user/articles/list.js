import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import ItemArticles from './item'
import { EMPTY_DATA, RECEIVING_INFO } from '../../../constants/responses'
import SimpleLoading from '../../global/loadings/simple'
import Alert from '../../global/elements/alert'
import RefreshSvg from '../../global/svg/refresh'

export default function ListArticles () {

    const {articles} = useSelector(state => state.articles)

    const {isLoading} = useSelector(state => state.global)

    const router = useRouter()

    return (
        <>
            <div className="grid lg:grid-cols-24 grid-cols-12 gap-6">
                {articles.map(article => <ItemArticles key={article.id} {...article} />)}
            </div>
            
            {
                !articles.length 
                    ? 
                        <Alert className="mx-4 md:mx-0">
                            {
                                isLoading 
                                    ? 
                                        <div className="flex items-center space-x-reverse space-x-2"><SimpleLoading /><span>{RECEIVING_INFO}</span></div> 
                                    :   
                                        <div className="flex space-x-reverse space-x-2">
                                            <span>{EMPTY_DATA}</span>
                                            <RefreshSvg onClick={() => router.reload()} className="h-6 w-6 text-indigo-500 cursor-pointer" />
                                        </div>
                            }
                        </Alert> 
                    : null
            }
        </>
    )
}