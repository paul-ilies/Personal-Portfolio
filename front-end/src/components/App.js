import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap";
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
    const el = useRef();
    const q = gsap.utils.selector(el);

    gsap.config({
        nullTargetWarn: false,
        trialWarn: false,
    });

    useEffect(() => {
        const tl = gsap.timeline();
        const animLoading = tl
            .from(q(".navbar-item"), {
                autoAlpha: 0,
                y: -10,
                stagger: 0.1
            })





        const loadAnim = () => {
            return animLoading
        };

        window.addEventListener("load", loadAnim);

        return () => {
            animLoading.kill();
            window.removeEventListener("load", loadAnim)
        }



    }, [q])


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
            <div className='container' ref={el}>
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
