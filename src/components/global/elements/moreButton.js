import { useSelector } from 'react-redux'
import SimpleLoading from '../loadings/simple'

export default function MoreButton ({text, onClick, isStill}) {

    const {isLoading} = useSelector(state => state.global)

    return (
        <>
            {
                isStill
                    ?
                        <div className="flex justify-center text-gray-500 dark:text-gray-200 pt-6">
                            <button className="flex justify-center items-center space-x-reverse space-x-2" onClick={onClick}>
                                {isLoading ? <SimpleLoading /> : null}
                                <span>{text}</span>
                            </button>
                        </div>
                    :
                        null
            }
        </>
    )
}