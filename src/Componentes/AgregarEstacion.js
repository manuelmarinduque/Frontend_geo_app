import React, { Component } from "react";
import { FormGroup, Row, Col, Form, Input, Label, Button } from "reactstrap";
import jwt from "jsonwebtoken";

class AgregarEstacion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      phone: "",
      latitude: "",
      longitude: "",
    };
    this.onChange = this.onChange.bind(this);
    this.enviarDatos = this.enviarDatos.bind(this);
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  enviarDatos(e) {
    var data1 = "";
    e.preventDefault();
    const url = "http://localhost:5500/station/create_station";
    const data = {
      name: this.state.nombre,
      address: this.state.direccion,
      phone: this.state.telefono,
      latitude: this.state.latitud,
      longitude: this.state.longitud,
    };
    fetch(url, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 3ywg&hsnxu43o9+iaz&sdtr",
      },
    }) // Aqui va la ruta
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((data) => {
        data1 = jwt.verify(
          data.token,
          "3ywg&hsnxu43o9+iaz&sdtr",
          function (err, dat) {
            return dat;
          }
        );
      });
  }

  render() {
    return (
      <div class="wrapper fadeInDown" width="">
        <div id="formContent">
          <h2>Registro de Estaciones</h2>

          <form onSubmit={this.enviarDatos}>
            <div>
              <Label>Nombre</Label>
            </div>
            <input
              type="text"
              id="name"
              class="fadeIn second"
              name="name"
              placeholder="Nombre de la estacion de gasolina"
              value={this.state.nombre}
              onChange={this.onChange}
            />
            <div>
              <Label>Direccion</Label>
            </div>
            <input
              type="text"
              id="address"
              class="fadeIn third"
              name="address"
              placeholder="Direccion de la estacion de gasolina "
              value={this.state.direccion}
              onChange={this.onChange}
            />
            <div>
              <Label>Telefono</Label>
            </div>
            <input
              type="text"
              id="phone"
              class="fadeIn third"
              name="phone"
              placeholder="Telefono de la estacion de gasolina"
              value={this.state.telefono}
              onChange={this.onChange}
            />
            <div>
              <Label>Latitudes</Label>
            </div>
            <input
              type="text"
              id="latitude"
              class="fadeIn third"
              name="latitude"
              placeholder="Latitud de la estacion"
              value={this.state.latitud}
              onChange={this.onChange}
            />
            <div>
              <Label>Longitud</Label>
            </div>
            <input
              type="text"
              id="longitude"
              class="fadeIn third"
              name="longitude"
              placeholder="Longitud de la estacion"
              value={this.state.longitud}
              onChange={this.onChange}
            />
            <input type="submit" class="fadeIn fourth" value="Registrar" />
          </form>
        </div>
      </div>
    );
  }
}
export default AgregarEstacion;
