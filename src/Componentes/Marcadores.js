import axios from "axios";
import React from "react";

import { Marker, Popup } from "react-leaflet";
import EditSedeModal from "./EditSedeModal";

const Marcadores = ({ marcadores }) => {
  return marcadores.map((marcador, i) => (
    <Marker key={i} position={[marcador.latitud, marcador.longitud]}>
      <Popup>
        {console.log(marcador)}
        <b>Nombre:</b> {marcador.nombre_sede}. <br />
        <b>Direccion:</b> {marcador.direccion}. <br />
        <b>Telefono:</b> {marcador.telefono}. <br />
        <b>Lugar:</b> {marcador.ciudad}. <br />
        <EditSedeModal data={marcador} />
      </Popup>
    </Marker>
  ));
};

export default Marcadores;
