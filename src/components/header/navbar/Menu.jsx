import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import ContentWrapper from '../../contentWrapper/ContentWrapper';


function Menu({toggleMenu}) {

    const menuList = [
        {
            page: "Movie",
            path: "/movie"
        },
        {
            page: "TV Show",
            path: "/tv"
        },
        {
            page: "Search",
            path: "/search"
        },
    ];

    const { pathname } = useLocation();

    return (
        <nav className={`nav-menu ${toggleMenu ? "extend" : ""}`}>
            <ContentWrapper>
                <div className="nav-logo">
                    <Link to="/">
                        <span className='brand'>H-M</span>
                        <img src="/images/logo-movie.png" alt="logo-h-movie" />
                        <span className='brand'>VIE</span>
                    </Link>
                </div>
                <ul className={`menu-list ${toggleMenu && "extend"}`} >
                    {menuList.map((e, i) =>
                        <li className={`menu-item ${e.path === pathname ? "active" : ""}`} key={i}><Link to={e.path}>{e.page}</Link></li>)}
                </ul>
            </ContentWrapper>
        </nav>
    )
}

Menu.propTypes = {
    toggleMenu: PropTypes.bool,
}

export default Menu;