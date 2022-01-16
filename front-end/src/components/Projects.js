import React from 'react';
import "./css/projects.css"
import Project from './Project';
import { projects } from "../source/projects";

const Projects = () => {

    const fetchData = () => {
        return projects.map(el => {
            const { id, image, techList, title, description, gitLink, webLink } = el;

            return (<Project
                key={id}
                title={title}
                description={description}
                techList={techList.map(el => <li key={el}>{el}</li>)}
                webLink={webLink}
                gitLink={gitLink}
                image={image}

            />)
        })
    }
    return (
        <div className='portfolio' id="portfolio">
            <header>
                <h1>Portfolio</h1>
            </header>
            <div className="projects">
                {fetchData()}
            </div>
        </div>
    )
}

export default Projects
