import React from 'react';
import './Header.css';
import logo from '../../images/headerImage.png';

const Header = () => {
    return(
        <header className="header">
            <img className="headerimage" src={logo} alt="headerimage"></img>
        </header>
    )
}

export default Header;
