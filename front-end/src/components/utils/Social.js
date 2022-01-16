import React from 'react';
import githubLogo from "../../pictures/githubIcon.svg"
import linkedinLogo from "../../pictures/linkedin.svg"

const Social = ({ className }) => {
    return (
        <div className={className}>
            <a href="https://github.com/paul-ilies/" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="github" /></a>
            <a href="https://www.linkedin.com/in/iliespauldaniel764a2a144/" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="github" /></a>
        </div>
    )
}

export default Social
