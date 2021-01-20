import React from 'react';

import { Marker, Popup } from 'react-leaflet'

const Marcadores= ({marcadores}) => {
    return(
        marcadores.map((marcador,i)=>(
        <Marker key={i} position={[marcador.latitude , marcador.longitude]}>
            <Popup>
                <b>Nombre:</b> {marcador.name}. <br/>
                <b>Direccion:</b> {marcador.address}. <br/>
                <b>Telefono:</b> {marcador.phone}. <br/>
            </Popup>
        </Marker>       
        ))    
    ) 
};


export default Marcadores