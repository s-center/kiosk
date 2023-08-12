import React from 'react';
import './Header.css';
import logo from '../../images/로고예시.png';

const Header = () => {
    return(
        <header>
            <img className="headerimage" src={logo} alt="headerimage"></img>
        </header>
    )
}

export default Header;
