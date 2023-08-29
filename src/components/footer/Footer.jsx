import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import './footer.scss';


function Footer() {
    return (
        <footer>
            <ContentWrapper>
                <ul className="about-us">
                    <li className='intro'>About us</li>
                    <li className='intro'>Terms of use</li>
                    <li className='intro'>Services</li>
                    <li className='intro'>Blog</li>
                    <li className='intro'>FAQ</li>
                </ul>
                <div className="follow-us">
                    <span className='follow-icon'><FaFacebookF /></span>
                    <span className='follow-icon'><FaInstagram /></span>
                    <span className='follow-icon'><FaTwitter /></span>
                </div>
                <div className="author">
                    <img src="/images/logo-movie.png" alt="author-sign" />
                    <span>--Ha Nguyen--</span>
                    <img src="/images/logo-movie.png" alt="author-sign" />
                    </div>
            </ContentWrapper>
        </footer>
    )
}

Footer.propTypes = {}

export default Footer;
