import React, { Component } from "react";
import { FormGroup, Row, Col, Form, Input, Label, Button } from 'reactstrap';
import image from "../assets/images/cells.webp";

class AgregarEstacion extends Component {

    constructor(props){
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


    onChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    };


    enviarDatos(e) {
        e.preventDefault();
        const url = "http://localhost:3500/create_station"  // se cambia la direccion en el backend
        const data = {       
             name: this.state.nombre,
             address: this.state.direccion,
             phone: this.state.telefono,
             latitude: this.state.latitud,
             longitude: this.state.longitud,
        };
        fetch(url , {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }) // Aqui va la ruta
          .then((res) => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
      }
    

    render() {
        return (
            <div class="wrapper fadeInDown">
            <div id="formContent">

            <h2>Registro de Estaciones</h2>

              <form onSubmit={this.enviarDatos}>
                  <Label>Nombre</Label>
                <input
                  type="text"
                  id="name"
                  class="fadeIn second"
                  name="name"
                  placeholder="Nombre de la estacion de gasolina"
                  value={this.state.nombre} onChange={this.onChange}
                  
                />
                 <Label>Direccion</Label>
                <input
                  type="text"
                  id="address"
                  class="fadeIn third"
                  name="address"
                  placeholder="Direccion de la estacion de gasolina "
                  value={this.state.direccion} onChange={this.onChange}
                />
                 <Label>Telefono</Label>
                <input
                  type="text"
                  id="phone"
                  class="fadeIn third"
                  name="phone"
                  placeholder="Telefono de la estacion de gasolina"
                  value={this.state.telefono} onChange={this.onChange}
                />
                <Label>Latitud</Label>
                <input
                  type="text"
                  id="latitude"
                  class="fadeIn third"
                  name="latitude"
                  placeholder="Latitud de la estacion"
                  value={this.state.latitud} onChange={this.onChange}
                />
                <Label>Longitud</Label>
                <input
                  type="text"
                  id="longitude"
                  class="fadeIn third"
                  name="longitude"
                  placeholder="Longitud de la estacion"
                  value={this.state.longitud} onChange={this.onChange}
                />
                <input type="submit" class="fadeIn fourth" value="Registrar" />
              </form>
            </div>
          </div>
        )
    }

}
export default AgregarEstacion;