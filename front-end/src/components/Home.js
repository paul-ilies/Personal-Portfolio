import React from 'react';
import "./css/home.css";
import Buttons from './utils/Buttons';
import Social from './utils/Social';

const Home = () => {


    const contactHandler = () => {
        document.querySelector("#contactForm").scrollIntoView({ behavior: "smooth" })

    }
    const portfolioHandler = () => {
        document.querySelector("#portfolio").scrollIntoView({ behavior: "smooth" })

    }
    return (
        <div className='home' >
            <div className="presentation">
                <div className="developer">
                    <h1 className="developer-greeting">Hello, I am</h1>
                    <h1 className="developer-name">Ilies <br />Paul Daniel </h1>
                    <p>A <span>front-end developer</span> who discovered his passion at 35</p>
                </div>
                <div className="social-links">
                    <h1>Find Me on</h1>
                    <Social className="social" />
                </div>
                <div className="contact-buttons">
                    <Buttons

                        text="Contact"
                        className="contact-button"
                        onclick={() => contactHandler()}
                    />
                    <Buttons
                        text="Portfolio"
                        className="portfolio-button"
                        onclick={() => portfolioHandler()}
                    />
                </div>
            </div>

        </div>
    )
}

export default Home
