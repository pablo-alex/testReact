import React, { Component } from 'react'

import kanban from './public/image/captura.png';
import parking from './public/image/parking.jpeg';

class Portfolio extends Component {
    render() {
        return (
            
            <section className="projects">
                    <p>Proyectos en los que he trabajado</p>

                    <div className="container">
                        <a href="https://github.com/IlusionistaXD/mypracticeKanbanBoard"><img src={kanban} width="200" height="200" alt="Pybot"/><p>Practica con React.js</p></a>
                        <a href="https://github.com/IlusionistaXD/proyectoExpociencia"><img src={parking} width="200" height="200" alt="Pybot"/><p>Proyecto con Arduino y Módulos de RF</p></a>
                    </div>
            </section>
        )
    }
}

export default Portfolio


