import React, { useState, useEffect } from 'react';
import "./css/app.css";

import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Loader from "./utils/Loader";





const App = () => {
    const [loading, SetLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            SetLoading(false);
        }, 1000);


    }, [])



    if (loading) {
        return (<Loader />)
    }
    else {
        return (
            <div className='container' >


                <Header />
                <Home />
                <About />
                <Projects />
                <Contact />
                <Footer />

            </div>
        )
    }

}

export default App
