import { Link } from 'react-router-dom';


function PageNotFound() {

    const pageNotFound = {
        position: 'absolute',
        top: '30%',
        left: '30%',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '20px'
    };

    const imgNotFound = {
        height: '160px',
    };

    const goBack = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '20px',
    };

    const styleLink = {
        textDecoration: 'underline',
        fontWeight: '500'
    }

    return (
        <div className='page-not-found' style={pageNotFound}>
            <img src="/images/movie-removebg.png" alt="page-not-found" style={imgNotFound} />
            <div className="go-back" style={goBack}>
                <h2 style={{fontSize: '2rem'}}>Page Not Found !</h2>
                <Link to="/" style={styleLink}>Go home</Link>
            </div>
        </div>
    )
}

export default PageNotFound;
