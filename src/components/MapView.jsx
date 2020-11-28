import React, {useState}from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import "leaflet/dist/leaflet.css";

//error arreglando error de muestra de iconos por default
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;
//////////////

const MapView = ()=>{
    //guardamos los datos que obtenemos de la card
    const location = useLocation();
    const [state] = useState({
        currentLocation: { lat: location.state.latitude, lng: location.state.longitude}
    });

    return (
        <MapContainer center={state.currentLocation} zoom={14}>
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={state.currentLocation}>
                <Popup>
                    {location.nameLugar}
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default MapView;
