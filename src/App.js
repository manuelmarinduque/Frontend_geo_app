import "./App.css";

import React, {useState} from "react";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import jwt from "jsonwebtoken";


import Marcadores from "./Componentes/Marcadores";
import { Component } from "react";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import socket from "./Componentes/socket";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marcadores: [],
    };
  }

  componentDidMount() {
    
    socket.emit('sede:listar_sedes');
    
    socket.on('sede:listar_sedes',data =>{

      this.setState({marcadores: data.data});
    })
    /*var data1 = "";
    fetch("http://localhost:5500/sede/obtener_sedes", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    }) // Aqui va la ruta
      .then((res) => {
        res.json().then((data) => {
          this.setState({ marcadores: data.data });
        });
      })
      .catch((err) => {
        console.log(err);
      });*/
  }

  

  render() {
    return (
      <MapContainer
        center={[4.08892, -76.20143]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
            <Marcadores marcadores={this.state.marcadores} />  
      </MapContainer>
    );
  }
}

export default App;
