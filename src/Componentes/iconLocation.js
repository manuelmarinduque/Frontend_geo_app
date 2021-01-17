import React from 'react';


import L from 'leaflet'


const iconLocation = L.icon({
    iconUrl:require("../assets/icono.svg"),
    iconRetinaUrl:require("../assets/icono.svg"),
    iconSize:[20,20],
    className:"leaflet-venue-icon",

});


export default iconLocation;