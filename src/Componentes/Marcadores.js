import axios from "axios";
import React from "react";

import { Marker, Popup } from "react-leaflet";
import EditSedeModal from "./EditSedeModal";

const Marcadores = ({ marcadores }) => {
  const popupContent = {
    textAlign: "center",
    height: "350px",
    marginTop: "30px",
  };
  const popupHead = {
    fontWeight: "bold",
    fontSize: "22px",
  };

  const popupText = {
    fontSize: "15px",
    marginBottom: "20px",
  };

  const okText = {
    fontSize: "15px",
  };
  return marcadores.map((marcador, i) => (
    <Marker key={i} position={[marcador.latitud, marcador.longitud]}>
      <Popup style={{ minWidth: "100px" }}>
        {console.log(marcador)}
        <b style={popupHead}>Nombre:</b>{" "}
        <span style={popupText}>{marcador.nombre_sede}.</span> <br />
        <b style={popupHead}>Direccion:</b>{" "}
        <span style={popupText}>{marcador.direccion}.</span> <br />
        <b style={popupHead}>Telefono:</b>{" "}
        <span style={popupText}>{marcador.telefono}.</span> <br />
        <b style={popupHead}>Lugar:</b>{" "}
        <span style={popupText}>{marcador.ciudad}. </span>
        <br />
        <br />
        <table class="table table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">RECURSO</th>
              <th scope="col">EDITAR</th>
              <th scope="col">ELIMINAR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sede</td>
              <td>
                <EditSedeModal data={marcadores} />
              </td>
              <td>boton</td>
            </tr>
            <tr>
              <td>Curso</td>
              <td>boton</td>
              <td>boton</td>
            </tr>
            <tr>
              <td>Profesor</td>
              <td>boton</td>
              <td>boton</td>
            </tr>
          </tbody>
        </table>
      </Popup>
    </Marker>
  ));
};

export default Marcadores;
