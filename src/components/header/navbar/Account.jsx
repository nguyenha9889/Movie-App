// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ContentWrapper from '../../contentWrapper/ContentWrapper';


function Account() {

    return (
        <div className="account-container">
            <ContentWrapper>
                <button className="btn-login">Login</button>
            </ContentWrapper>
        </div>
    )
}

export default Account;
