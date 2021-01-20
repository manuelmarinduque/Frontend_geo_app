import React from 'react';

import { Marker, Popup } from 'react-leaflet'

const Marcadores= ({marcadores}) => {
    return(
        marcadores.map((marcador,i)=>(
        <Marker key={i} position={[marcador.latitude , marcador.longitude]}>
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