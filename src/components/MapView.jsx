import React from 'react'
import { useLocation } from 'react-router-dom';

function MapView() {

    const location = useLocation();
    console.log(location.state);

    return (
        <div>
            <h1>MapVIEWS</h1>
        </div>
    )
}

export default MapView;
