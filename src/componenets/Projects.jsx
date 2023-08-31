import { useState } from "react"

export default function Projects({ projects }) {
    
    return (
        <>
            {projects.map((project, index) => {
                const { name, imgPath, github, live } = project;
                const style = {
                    backgroundImage: `url(${imgPath})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '31vw',
                };

                return (
                    <section
                        className="project m-3"
                        key={name}
                        style={style}
                    >
                        <p className="project-title">{name}</p>
                    </section>
                );
            })}
        </>
    );
}