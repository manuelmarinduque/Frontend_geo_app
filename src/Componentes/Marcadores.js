import React from "react";

import { Marker, Popup } from "react-leaflet";
import EditSedeModal from "./EditSedeModal";
import EliminarSede from "./EliminarSede";
import VerModal from "./VerModal";

const Marcadores = ({ marcadores }) => {
  const popupHead = {
    fontWeight: "bold",
    fontSize: "22px",
  };

  const popupText = {
    fontSize: "15px",
    marginBottom: "20px",
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
        <table className="table table-hover">
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
                <EditSedeModal data={marcador} />
              </td>
              <td>
                <EliminarSede data={marcador} />
              </td>
            </tr>
            <tr>
              <td>Curso</td>
              <td colSpan="2">
                <VerModal title="Cursos" data={marcador} />
              </td>
            </tr>
            <tr>
              <td>Profesor</td>
              <td colSpan="2">boton</td>
            </tr>
          </tbody>
        </table>
      </Popup>
    </Marker>
  ));
};

export default Marcadores;
