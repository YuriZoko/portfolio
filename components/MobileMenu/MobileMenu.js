import React, { Fragment, useState } from 'react';
import { Link } from 'react-scroll'

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    <li>
                        <a href="/">Accueil</a>                    
                    </li>
                    <li>
                        <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>A propos</Link>
                    </li>
                    <li><Link activeClass="active" to="service" spy={true} smooth={true} duration={500}>Service</Link></li>
                    <li>
                        <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500} onClick={ClickHandler}>Portfolio</Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;