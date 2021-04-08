import React from "react";

import { Marker, Popup } from "react-leaflet";
import EditSedeModal from "./EditSedeModal";

const Marcadores = ({ marcadores }) => {
  return marcadores.map((marcador, i) => (
    <Marker key={i} position={[marcador.latitude, marcador.longitude]}>
      <Popup>
        {console.log(marcador)}
        <b>Nombre:</b> {marcador.name}. <br />
        <b>Direccion:</b> {marcador.address}. <br />
        <b>Telefono:</b> {marcador.phone}. <br />
        <EditSedeModal id={marcador.id} />
      </Popup>
    </Marker>
  ));
};

export default Marcadores;
