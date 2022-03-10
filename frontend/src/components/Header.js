import React from 'react';
import logo from '../assets/images/logo/Reservia.svg'
import Navbar from './Navbar.js'
import ToggleConnexion from './ToggleConnexion';
// import './Header.scss';

const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="Reservia"/>
            </div>
            <Navbar />
            <ToggleConnexion />
        </header>
    );   
};
  
export default Header;