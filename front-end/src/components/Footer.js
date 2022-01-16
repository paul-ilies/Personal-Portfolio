import React from 'react';
import "./css/footer.css";
import Social from './utils/Social';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const at = `\u{0040}`;
    return (
        <div className='footer'>
            <h1>Portfolio</h1>
            <Social className="footer-links" />
            <p>This website portfolio was created from scratch by <br /> <span>Ilies Paul Daniel</span>  <br /><span>{`Copyright ${at} ${currentYear}`}</span>  </p>
        </div>
    )
}

export default Footer
