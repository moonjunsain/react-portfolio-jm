import Projects from "../componenets/Projects"

export default function Portfolio(){
    class Project {
        constructor(name, imgPath, github, live){
            this.name = name
            this.imgPath = imgPath
            this.github = github
            this.live = live
        }
    }
    
    const projects = [
        new Project('CatFish', 'cat-fish.jpg', 'https://github.com/kaylaasana/CatFish', 'https://kaylaasana.github.io/CatFish/'),
        new Project("The Monkey's Cup", 'monkey-cup.png', 'https://github.com/DSHowarth/Escape-Room-Storefront', 'https://sheltered-scrubland-47894-17ae2d63c103.herokuapp.com/'),
        new Project("Weather Dashboard", "weather-dashboard.jpg", "https://github.com/moonjunsain/weather-dashboard", "https://moonjunsain.github.io/weather-dashboard/"),
        new Project("Hero RPG", "hero-rpg.jpg", "https://github.com/moonjunsain/hero-rpg", "https://moonjunsain.github.io/hero-rpg/"),
        new Project("Work Scheduler", "work-day.png", "https://github.com/moonjunsain/work-day-scheduler", "https://moonjunsain.github.io/work-day-scheduler/"),
        new Project("Password Gen", "password-gen.png", "https://github.com/moonjunsain/password-generator", "https://moonjunsain.github.io/password-generator/"),
    ]


    return(
        <div className='project-container'>
            <Projects projects={projects} />
        </div>
    )
}