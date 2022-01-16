import React from 'react';
import "./css/about.css";
import { technologies } from "../source/technologies";

const About = () => {

    const renderTechs = () => {
        return technologies.map(tech => {
            const { id, name, icon } = tech;

            return (
                <li key={id} >
                    <img src={icon} alt={name} title={name} />
                </li>
            )
        })
    }
    return (
        <div className='about' id="about">
            <article className="about-me">
                <header>
                    <h1>About Me</h1>
                    <div className='line-through'></div>
                </header>
                <div className="intro">
                    <p>I graduted  the postgraduate program in <span>Applied Informatics and Programming</span> at  <span>Technical University of Cluj-Napoca</span>  in 2021.</p>
                    <p>I learned the basics of programming in <span>C++</span>, relational databases with <span>Oracle SQL</span>, web technologies as <span>HTML, CSS, Javascript</span>,  programming in <span>C#</span>, the bases of <span>computer systems and networks</span>,<span> OOP programming concepts</span> and <span>fundamental algoritms</span>. </p>
                </div>

                <div className="technologies">
                    <header>
                        <h2>What i learned so far...</h2>
                    </header>
                    <ul>
                        {renderTechs()}
                    </ul>

                </div>

            </article>
            <figure className='about-image'>
                <div ></div>
            </figure>
        </div>
    )
}

export default About
