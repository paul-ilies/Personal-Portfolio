import React, { useState, useEffect } from 'react';
import "./css/projects.css"
import Project from './Project';
import axios from "axios"

const Projects = () => {
    const [projects, setProjects] = useState();

    useEffect(() => {
        const fetchProject = async () => {
            const data = await axios.get("/projects").then(response => response.data)
            setProjects(data)


        }

        fetchProject()
    }, [])



    const fetchData = () => {
        if (!projects) {
            return
        }
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
