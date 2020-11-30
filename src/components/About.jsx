import React from 'react';

import Banner from './AboutComponents/Banner'
import Review from './AboutComponents/Review'
import Project from './AboutComponents/Project'
import Portfolio from './AboutComponents/Portfolio'
import Contact from './AboutComponents/Contact'

const About = () => {
    return (
        <div className="App">

        <Banner /> 
        <br />
        <Review />
        <br />
        <hr />
        <h1 className="skillheader">Mis habilidades</h1>
        <hr />
        <Project />
        <br/>
        <hr />
        <h1 id='Portfolio'>Portafolio</h1>
        <hr/>
        <Portfolio />
        <hr />
        <h1 id="contactnav" className="contact">Informacion de Contacto</h1>
        <hr />
        <Contact />

        </div>
    )
}

export default About;
