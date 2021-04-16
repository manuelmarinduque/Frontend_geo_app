import React from "react";
import "../assets/Log.css";
import jwt from "jsonwebtoken";
import { Component } from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";

class registroUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      contraseña: "",
      tipo: "",
      nombre: "",
      genero: "",
      nacionalidad: "",
      direccion: "",
      telefono: "",
      empresa: "",
      rol: "",
      sede: "",
      membresia: "",
      acces: false,
      empresas: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    var data1 = "";
    fetch("", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }) // Aqui va la ruta
      .then((res) => res.json())
      .then((data) => {
        data1 = jwt.verify(
          data.token,
          "3ywg&hsnxu43o9+iaz&sdtr",
          function (err, dat) {
            return dat;
          }
        );
        this.setState({ empresas: Object.entries(data1)[0][1] });
      })
      .catch(console.log);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    var data1 = "";
    e.preventDefault();
    fetch("http://localhost:3500/usuario/crear_usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 3ywg&hsnxu43o9+iaz&sdtr",
      },
      body: JSON.stringify({
        numero_documento: this.state.usuario,
        password: this.state.contraseña,
        tipo_documento: this.state.tipo,
        nombre_usuario: this.state.nombre,
        genero: this.state.genero,
        nacionalidad: this.state.nacionalidad,
        direccion: this.state.direccion,
        numero_celular: this.state.telefono,
      }),
    }) // Aqui va la ruta
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.error("Error: ", error))
      .then((data) => {
        data1 = jwt.verify(
          data.token,
          "3ywg&hsnxu43o9+iaz&sdtr",
          function (err, dat) {
            return dat;
          }
        );
      });
    alert("Usuario Registrado" + this.state.usuario);
  }

  render() {
    const {
      usuario,
      contraseña,
      tipo,
      nombre,
      genero,
      nacionalidad,
      direccion,
      telefono,
    } = this.state;
    return (
      <Grid container spacing={1} align="center">
        {/* <!-- Login Form --> */}
        <form onSubmit={this.handleSubmit}>
          <Grid item xs>
            <input
              type="text"
              id="usuario"
              className="fadeIn second"
              name="usuario"
              placeholder="identificacion"
              value={usuario}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs>
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="contraseña"
              placeholder="contraseña"
              value={contraseña}
              onChange={this.handleChange}
            />
          </Grid>
          <input
            type="text"
            id="tipo"
            className="fadeIn fourth"
            name="tipo"
            placeholder="tipo de documento"
            value={tipo}
            onChange={this.handleChange}
          />
          <input
            type="text"
            id="nombre"
            className="fadeIn fifth"
            name="nombre"
            placeholder="Nombre Completo"
            value={nombre}
            onChange={this.handleChange}
          />
          <input
            type="text"
            id="genero"
            className="fadeIn sixth"
            name="genero"
            placeholder="genero"
            value={genero}
            onChange={this.handleChange}
          />
          <input
            type="text"
            id="nacionalidad"
            className="fadeIn seventh"
            name="nacionalidad"
            placeholder="nacionalidad"
            value={nacionalidad}
            onChange={this.handleChange}
          />
          <input
            type="text"
            id="direccion"
            className="fadeIn eighth"
            name="direccion"
            placeholder="direccion"
            value={direccion}
            onChange={this.handleChange}
          />
          <input
            type="text"
            id="telefono"
            className="fadeIn ninth"
            name="telefono"
            placeholder="telefono"
            value={telefono}
            onChange={this.handleChange}
          />
          <Select
            labelId="empresa-select-label"
            id="empresa-select"
            value={this.state.empresa}
            onChange={this.handleChange}
          >
            <selectEmpresa empresas={this.state.empresas} />
          </Select>
          <input type="submit" className="fadeIn tenth" value="Registrar" />
        </form>
      </Grid>
    );
  }
}

export default registroUsuarios;
