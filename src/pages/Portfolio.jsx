import { useState } from 'react'

export default function Portfolio(){
    return(
        <div className='project-container'>
            <a href="https://github.com/kaylaasana/CatFish" target='_blank' rel='noopner noreferrer'>
                <img src="cat-fish.jpg" alt="cat fish" className='project'/>
            </a>
            <a href="https://github.com/DSHowarth/Escape-Room-Storefront" target='_blank' rel='noopner noreferrer'>
                <img src="monkey-cup.png" alt="monkey cup" className='project'/>
            </a>
        </div>
    )
}