import { memo } from 'react'
import PropTypes from 'prop-types'

import GroupForm from './group'
import InputElement from '../elements/input'

function InputForm ({label, type = 'string', value, keyname, error, disabled = false, placeholder = null, inputHandler, dir = 'rtl', alert = null}) {
    return (
        <GroupForm label={label} error={error} alert={alert}>
            <InputElement 
                type={type}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                dir={dir}
                onChange={({target: {value}}) => inputHandler(keyname, value)}
            />
        </GroupForm>
    )
}

InputForm.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any.isRequired,
    keyname: PropTypes.string.isRequired,
    error: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    inputHandler: PropTypes.func.isRequired,
    dir: PropTypes.string,
    alert: PropTypes.string
}

export default memo(InputForm)