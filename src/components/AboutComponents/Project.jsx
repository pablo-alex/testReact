import React, { Component } from 'react'

import pyimg from './public/image/pythonimg.png'
import jsimg from './public/image/javascriptimg2.png'
import htmlimg from './public/image/html5logo.jpg'
import cssimg from './public/image/csslogo.png'
import databasebimg from './public/image/database.jpg'





class Project extends Component {
    render() {
        return (
            <section id="skillheader" className="flex-project-container">

                    <div><img src={pyimg} width="100" height="100" alt="python"/></div>
                    <div><img src={jsimg} width="100" height="100" alt="js"/></div>
                    <div><img src={htmlimg} width="100" height="100" alt="html"/></div>  
                    <div><img src={cssimg} width="100" height="100" alt="css"/></div> 
                    <div><img src={databasebimg} width="100" height="100" alt="db"/></div>
                
            </section>
        )
    }
}

export default Project
