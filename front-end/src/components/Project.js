import React from 'react';

const Project = (props) => {
    return (
        <article>
            <div className="project-description">
                <header>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </header>
                <div className="project-techs">
                    <h2>Technologies used</h2>
                    <ul>
                        {props.techList}
                    </ul>
                </div>
                <div className="project-links">
                    <a href={props.webLink} alt="website link" target="_blank" rel="noopener noreferrer">See Live</a>
                    <a href={props.gitLink} alt="github link" target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
            </div>
            <div className="project-card">
                <img src={props.image} alt="project" />
            </div>

        </article>
    )
}

export default Project
