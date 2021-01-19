import React from 'react';

import { Marker, Popup } from 'react-leaflet'
import iconLocation from './iconLocation' 

const Marcadores= ({marcadores}) => {
    return(
        marcadores.map((marcador)=>(

        <Marker position={[marcador.latitude , marcador.longitude]}>
            <Popup>
                {marcador.name}. <br/>
                {marcador.address}. <br/>
                {marcador.phone}. <br/>
            </Popup>
        </Marker>       
        ))    
    ) 
};


export default Marcadores