import React from "react";

function ProjectCard({title, desc, link}){
    return(
        <div id="project" className="project">
            <span>
                <h1 className="projectTitle">{title}</h1>
                <p className="projectDesc">{desc}</p>
            </span>
            <a href={link} target="_blank" rel="noopener noreferrer">Visit →</a>
        </div>
    )
}

export default ProjectCard