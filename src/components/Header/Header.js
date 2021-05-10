import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './Header.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

library.add(fab, faUserCircle, faShoppingCart, faBars)
const Header = () => {
    return (
        <header>
          <div className="container navbar">

            {/* <Link to="/"> */}
                <div className="header_logo">
                    <img src={Logo} alt="logo-img"/>
                </div>
            {/* </Link> */}
            {/* <div className="navbar"> */}
            <div className="navbar1">
                <ul className="navs1">
                    {/* <Link to="/shop"> */}
                        <li>Shop</li>
                    {/* </Link> */}
                    <li>Discover</li>
                    <li>Custom</li>
                    <li>Bookmark</li>
                    <li>About</li>
                </ul>
            </div>
            {/* <div className="navbar2">
                <ul className="navs2">
                    <li>Write</li>
                    <li>Plan</li>
                    <li>Create</li>
                    <li>Gigt</li>
                    <li>Shop All</li>
                </ul>
            </div> */}
            {/* </div> */}
            <div className="navbar_right">
                <ul className="nav_icons">
                    {/* <Link to="/login"> */}
                        <li><FontAwesomeIcon icon={faUserCircle}/></li>
                    {/* </Link> */}
                    {/* <Link to="/cart"> */}
                        <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                    {/* </Link> */}
                </ul>
            </div>
          </div>
        </header>
    );
};

export default Header;