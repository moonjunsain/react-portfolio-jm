import { useState } from "react"

export default function Projects({ projects }) {
    // initiate hover status with default to false
    const [hoverStatus, setHover] = useState(Array(projects.length).fill('false'))
    
    // whenever the user mouse enter or leave, change the hover status
    const handleHover = (index)=>{
        const newHoverStatus = [...hoverStatus]
        newHoverStatus[index] = !newHoverStatus[index]
        setHover(newHoverStatus)
    }

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

                const show = {
                    display: 'block',
                }

                const hide = {
                    display: 'none'
                }

                return (
                    <section
                        className="project m-3"
                        key={name}
                        style={style}
                        onMouseEnter={()=>{handleHover(index)}}
                        onMouseLeave={()=>{handleHover(index)}}
                    >
                        <p className="project-title">
                            {name} {' '}
                            {/* depending on hoverstatus, show or hide the element */}
                            <a href={github} className="custom-link-portfolio" target="_blank" rel="noopener noreferrer" style={hoverStatus[index]? hide: show}>Github </a>
                            <a href={live} className="custom-link-portfolio" target="_blank" rel="noopener noreferrer" style={hoverStatus[index]? hide: show}>Live </a>
                        </p>
                    </section>
                );
            })}
        </>
    );
}