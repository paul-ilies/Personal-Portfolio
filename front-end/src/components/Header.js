import React from 'react';
import "./css/header.css";
import resume from "../source/Javascript-The-Definitive-Guide.pdf";


const Header = () => {

    return (
        <nav className='navbar'  >
            <ul className='navbar-list'>
                <li className='navbar-item left-item'><a href="/">Portfolio</a> </li>
                <li className='navbar-item active'><a href="#about" >About</a> </li>
                <li className='navbar-item'><a href="#portfolio">Portfolio</a> </li>
                <li className='navbar-item'><a href="#contactForm">Contact</a> </li>
                <li className='navbar-item resume'><a href={resume} rel="noopener noreferrer" download>Resume</a> </li>
            </ul>
        </nav>
    )
}

export default Header
