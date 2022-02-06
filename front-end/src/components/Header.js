import React, { useRef, useEffect } from 'react';
import "./css/header.css";
import resume from "../source/PIlies Resume.pdf";




const Header = () => {

    const el = useRef();


    useEffect(() => {
        el.current.addEventListener("click", function (e) {

            if (e.target.className === "nav-link") {
                e.preventDefault()
                const selection = document.querySelector(e.target.hash);
                selection.scrollIntoView({ behavior: "smooth" })
            }
            if (e.target.className === "nav-link-logo") {
                e.preventDefault();
                window.scrollTo(0, 0)
            }
        })
    }, [el])

    return (
        <nav className='navbar'  >
            <ul className='navbar-list' ref={el} >
                <li className='navbar-item left-item'><a href="/" className='nav-link-logo'>Portfolio</a> </li>
                <li className='navbar-item active'><a href="#about" className='nav-link' >About</a> </li>
                <li className='navbar-item'><a href="#portfolio" className='nav-link'>Portfolio</a> </li>
                <li className='navbar-item'><a href="#contactForm" className='nav-link'>Contact</a> </li>
                <li className='navbar-item resume'><a href={resume} rel="noopener noreferrer" download>Resume</a> </li>
            </ul>
        </nav>
    )
}

export default Header
