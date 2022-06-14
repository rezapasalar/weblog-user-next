import { useSelector } from 'react-redux'
import ItemArticles from './item'
import { EMPTY_DATA, RECEIVING_INFO } from '../../../constants/responses'
import SimpleLoading from '../../global/loadings/simple'
import Alert from '../../global/elements/alert'

export default function ListArticles () {

    const {articles} = useSelector(state => state.articles)

    const {isLoading} = useSelector(state => state.global)

    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {articles.map(article => <ItemArticles key={article.id} {...article} />)}
            </div>
            
            {!articles.length ? <Alert className="mx-4 md:mx-0">{isLoading ? <div className="flex items-center space-x-reverse space-x-2"><SimpleLoading /><span>{RECEIVING_INFO}</span></div> : EMPTY_DATA}</Alert> : null}
        </>
    )
}