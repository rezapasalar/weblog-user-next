import { memo } from 'react'
import PropTypes from 'prop-types'

function BodyCard ({children, text, onClick = null, className: classes = ''}) {
    return (
        <div onClick={onClick} className={`flex text-md font-bold px-3 text-gray-400 h-34 text-justify text-sm leading-7 cursor-pointer ${classes}`}>
            {text || children}
        </div>
    )
}

BodyCard.propTypes = {
    children: PropTypes.any,
    text: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
}

export default memo(BodyCard)