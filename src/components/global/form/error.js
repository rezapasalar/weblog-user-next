import { memo } from 'react'
import PropTypes from 'prop-types'

function ErrorElement ({message}) {
    return <small className="text-red-500">{message}</small>
}

ErrorElement.propTypes = {
    message: PropTypes.string.isRequired
}

export default memo(ErrorElement)