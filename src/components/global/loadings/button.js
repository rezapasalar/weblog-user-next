import { memo } from 'react'
import PropTypes from 'prop-types'
import ButtonElement from "../elements/button"

function ButtonLoading ({children, label = '', type = 'button', size = 'lg', variant = 'primary', outline = false , widthFull = false, isSubmit = null, isSubmitEffect = false, onClick = null, className: classes = ''}) {
    return (
        <ButtonElement
            disabled={isSubmit !== '' && 'disabled'}
            onClick={onClick}
            type={type}
            size={size}
            variant={variant}
            outline={outline}
            widthFull={widthFull}
            className={classes}
        >
            <div className="relative">
                {
                    (isSubmit !== '' && !isSubmitEffect) &&
                        <span className="absolute left-[calc(50%-16px)] top-[calc(50%-8px)] flex ml-2 w-4 h-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white"></span>
                            <span className={`relative inline-flex rounded-full bg-white w-4 h-4`}></span>
                        </span>
                }
                <span className={`${isSubmit !== '' && 'opacity-60'}`}>{children || label}</span>
            </div>
        </ButtonElement>
    )
}

ButtonLoading.propTypes = {
    children: PropTypes.any,
    label: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    variant: PropTypes.string,
    outline: PropTypes.bool,
    widthFull: PropTypes.bool,
    isSubmit: PropTypes.any.isRequired,
    isSubmitEffect: PropTypes.any,
    onClick: PropTypes.func,
    className: PropTypes.string
}

export default memo(ButtonLoading)