import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Card extends Component{

    render(){
        return (
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.location.name}</h5> 
                        <p className="card-text">{this.props.location.description}</p>
        
                        <Link className="btn btn-primary" to={{
                            pathname: '/map',
                            state: this.props.location.coordinates,
                            nameLugar: this.props.location.name
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