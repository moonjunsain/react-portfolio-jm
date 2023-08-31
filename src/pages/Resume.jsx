import { useState } from 'react'

export default function Resume(){
    return(
        <div className='m-3'>
            <h2>My Resume</h2>
            <h3>Front End Development</h3>
            <ul className='mx-3'>
                <li><h4>Javascript</h4></li>
                <li><h4>HTML</h4></li>
                <li><h4>CSS</h4></li>
                <li><h4>Handlebars</h4></li>
                <li><h4>React</h4></li>
                <li><h4>jQuery</h4></li>
                <li><h4>Bootstrap</h4></li>
                <li><h4>Three.js</h4></li>
                <li><h4>Bulma</h4></li>
            </ul>
            <h3>Back End Development</h3>
            <ul className='mx-3'>
                <li><h4>Express</h4></li>
                <li><h4>Mysql</h4></li>
                <li><h4>Sequelize</h4></li>
                <li><h4>MongoDB</h4></li>
                <li><h4>mongoose</h4></li>
            </ul>
        </div>
    )
}