import React, { Component } from 'react'
import logo from './public/image/maxresdefault.jpg';
import  './css/Main.css';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">

                    <a href="#home"><img className="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1> Hola! Soy Pablo Rodriguez </h1>
                    
            </section>
        )
    }
}

export default Banner


