import { memo } from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'

function ImgCard ({src, alt = '', onClick = null, className: classes = ''}) {
    return (
        <div className="relative md:rounded-t-lg overflow-hidden">
            <LazyLoad>
                <img onClick={onClick} src={src} alt={alt} className={`w-full h-52 object-cover hover:scale-110 transition cursor-pointer ${classes}`} />
            </LazyLoad>
        </div>
    )
}

ImgCard.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
}

export default memo(ImgCard)