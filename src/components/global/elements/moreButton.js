import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import SimpleLoading from '../loadings/simple'

export default function MoreButton ({text, onClick, isStill}) {

    const {isLoading} = useSelector(state => state.global)

    const {i18n: {language}} = useTranslation()

    return (
        <>
            {
                isStill
                    ?
                        <div className="flex justify-center text-gray-500 dark:text-gray-200 pt-6">
                            <button className={`flex justify-center items-center ${language === 'fa' && 'space-x-reverse'} space-x-2`} onClick={onClick}>
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