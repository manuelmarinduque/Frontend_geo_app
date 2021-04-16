import React, { Component } from "react";
import { Modal } from "reactstrap";
import add from "../assets/images/add.svg";
import socket from "./socket";

class SedeFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      error: false,
      errorMessage: "",
      name: "",
      latitude: "",
      longitude: "",
      city: "",
      phone: "",
      address:"",
    };

    this.handleChange = this.handleChange.bind(this);
    this.enviarSede = this.enviarSede.bind(this);
  }

  enviarSede(e) {
    e.preventDefault();
    const datos = {
      nombre_sede: this.state.name,
      id_empresa: 1,
      direccion: this.state.address,
      latitud: this.state.latitude,
      longitud: this.state.longitude,
      telefono: this.state.phone,
      ciudad: this.state.city,
    };

    socket.emit('sede:crear_sede', datos);

    socket.emit('sede:listar_sedes');

    socket.on('sede:listar_sedes',datos =>{

    
    })

  }
    /*
    fetch("http://localhost:5500/sede/crear_sede/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        nombre_sede: this.state.name,
        id_empresa: 1,
        direccion: this.state.address,
        latitud: this.state.latitude,
        longitud: this.state.longitude,
        telefono: this.state.phone,
        ciudad: this.state.city,
      }),
    }) // Aqui va la ruta
      .then((res) => res.json())
      .catch((error) => console.error("Error: ", error));
    alert("sede creada: " + this.state.name);
  }
*/

  toggle = () => {
    this.setState({
      error: false,
      errorMessage: "",
      modal: !this.state.modal,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div
        className="container"
        title="Edit"
        // style={{ padding: "10px", maxWidth: "720px" }}
      >
        <button
          className="btn"
          onClick={this.toggle}
          style={{ borderRadius: "50%", padding: "1px" }}
        >
          <img src={add} alt="" height="25px" />
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          fullscreen="below sm"
        >
          <div className="modal-header">
            <br />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="offset col-md-12">
                <div className="container">
                  <div className="card border-dark mb-3">
                    <div
                      className="card-header bg-transparent"
                      style={{ textAlign: "center" }}
                    >
                      Crear Sede
                    </div>
                    <div className="card-body">
                      <div className="container" style={{ padding: "10px" }}>
                        <form action="" className="form">
                          <div className="mb-3 row">
                            <label className="col-sm-3 col-form-label">
                              Nombre
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                name="name"
                                defaultValue={this.state.name}
                                // placeholder="Akiles"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-3 col-form-label">
                              Latitud
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                name="latitude"
                                defaultValue={this.state.latitude}
                                // placeholder="Salto"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-3 col-form-label">
                              Longitud
                            </label>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                name="longitude"
                                defaultValue={this.state.longitude}
                                // placeholder="akiles@correo.com"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <div className="col-sm-3 col-form-label">Ciudad</div>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                name="city"
                                defaultValue={this.state.city}
                                // placeholder="password"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <div className="col-sm-3 col-form-label">
                              telefono
                            </div>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                name="phone"
                                defaultValue={this.state.phone}
                                // placeholder="password"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <div className="col-sm-3 col-form-label">
                              Direccion
                            </div>
                            <div className="col-sm-9">
                              <input
                                type="text"
                                name="address"
                                defaultValue={this.state.address}
                                // placeholder="password"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="card-footer bg-transparent">
                      <div className="row">
                        <div className="d-grid gap-2 col-6 mx-auto">
                          <button
                            className="btn btn-secondary"
                            onClick={this.toggle}
                          >
                            Cancelar
                          </button>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                          <button
                            className="btn btn-success"
                            onClick={this.enviarSede}
                          >
                            Agregar
                            
                          </button>
                        </div>
                      </div>
                      <div className="row">
                        <small className="form-text text-muted">
                          <p style={{ color: "red" }}>
                            {this.state.error ? this.state.errorMessage : ""}
                          </p>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SedeFormModal;