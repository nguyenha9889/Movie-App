import React from 'react'
import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Img({ src, className}) {
    return (
        <LazyLoadImage
            className={className || ""}
            alt=""
            effect="blur"
            src={src}
        />
    )
}

Img.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
}

export default Img;
