import { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import SimpleLoading from '../loadings/simple'

function MoreButton ({label, isStill, onClick}) {

    const {isLoading} = useSelector(state => state.global)

    const {i18n: {language}} = useTranslation()

    return (
        <>
            {
                isStill &&
                    <div className="flex justify-center text-gray-500 dark:text-gray-200 pt-6">
                        <button className={`flex justify-center items-center ${language === 'fa' && 'space-x-reverse'} space-x-2`} onClick={onClick}>
                            {isLoading && <SimpleLoading />}
                            <span>{label}</span>
                        </button>
                    </div>
            }
        </>
    )
}

MoreButton.propTypes = {
    label: PropTypes.string.isRequired,
    isStill: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default memo(MoreButton)