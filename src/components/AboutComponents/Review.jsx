import React, { Component } from 'react'
import perfil from './public/image/perfil.jpg'

class Review extends Component {
    render() {
        return (
            <section id="container-about" className="container-about">
                    <h1>Acerca de Mi</h1> 
                    <img src={perfil} className="profilepic" width="180" height="180" alt="abtimg"/>
                    <p>
                    I recently started the last year of my college career and I am seeking employment in the software industry. Over the last year, working on a pair of proyects I took a special interest in web development. 
                    Any task that I undertake always I make sure to use a responsible approach, apply great energy and enthusiasm.
                    </p>
                
            </section>
        )
    }
}

export default Review
