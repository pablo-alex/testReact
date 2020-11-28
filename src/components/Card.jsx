import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Card extends Component{

    render(){
        return (
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{this.props.location.name}</h5> 
                        <p class="card-text">{this.props.location.description}</p>
        
                        <Link class="btn btn-primary" to={{
                            pathname: '/map',
                            state: this.props.location.coordinates
                        }}>
                        Ver en Mapa
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;