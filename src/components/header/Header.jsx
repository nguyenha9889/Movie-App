import { useEffect, useRef, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Menu from './navbar/Menu';
import Account from './navbar/Account';
import './header.scss';



function Header() {

    const headerRef = useRef();
    const [toggleMenu, setToggleMenu] = useState(false);

    const controlHeader = () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            headerRef.current.classList.add("show");
        } else headerRef.current.classList.remove("show");
    }

    useEffect(() => {
        window.addEventListener("scroll", controlHeader);
        return () => {
            window.removeEventListener("scroll", controlHeader)
        }
    }, []);

    return (
        <header ref={headerRef}>
            <button
                className='btn-toggle'
                onClick={() =>  setToggleMenu(!toggleMenu)}>
                <FiMenu />
            </button>
            <Menu
                toggleMenu={toggleMenu} />
            <Account />
        </header>
    )
}

export default Header;
