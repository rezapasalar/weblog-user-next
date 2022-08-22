import { memo } from 'react'
import PropTypes from 'prop-types'

function TitleCard ({text, onClick = null, className: classes = ''}) {
    return (
        <div onClick={onClick} className={`flex text-md font-bold px-3 text-gray-500 dark:text-gray-200 cursor-pointer ${classes}`}>
            {text}
        </div>
    )
}

TitleCard.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
}

export default memo(TitleCard)