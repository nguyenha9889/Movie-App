import PropTypes from 'prop-types';


function ContentWrapper({ children }) {
    const wrapperStyle = {
        width: `100%`,
        maxWidth: "1280px",
        margin: `0 auto`,
        padding: `0 20px`,
    }
    return (
        <div 
        className='content-wrapper'
        style={wrapperStyle}
        >{children}</div>
    )
}

ContentWrapper.propTypes = {
    children: PropTypes.node,
}

export default ContentWrapper;
