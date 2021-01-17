import React from 'react';

/*import Marcadores from './Marcadores'*/

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapView = () => {
    
    /*state ={
        marcadores:[]
      };
    */
    //componentDidMount() {
      //  fetch('http://localhost:3500/get_data')// Aqui va la ruta
       // .then(res => res.json())
        //.then((data) => {
         // this.setState({ marcadores: data })
       // })
        //.catch(console.log)
      //};
    
    
    return (<MapContainer center={[4.08892, -76.20143]} zoom={13} scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

       {/* <Marcadores marcadores={this.state.marcadores}/>*/}

    </MapContainer>)
}


export default MapView