import React, { Component } from "react";
import { Modal } from "reactstrap";
import edit from "../assets/images/editSede.webp";

class SedeFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      error: false,
      errorMessage: "",
      data: this.props.data,
      name: this.props.data.nombre_sede,
      latitude: this.props.data.latitud,
      longitude: this.props.data.longitud,
      city: this.props.data.ciudad,
      phone: this.props.data.telefono,
    };

    this.handleChange = this.handleChange.bind(this);
    this.enviarSede = this.enviarSede.bind(this);
  }

  enviarSede(e) {
    e.preventDefault();
    fetch("http://localhost:3500/sede/actualizar_sede/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        id_sede: this.state.data.id_sede,
        nombre_sede: this.state.name,
        id_empresa: this.state.data.id_empresa,
        direccion: this.state.data.direccion,
        latitud: this.state.latitude,
        longitud: this.state.longitude,
        telefono: this.state.phone,
        ciudad: this.state.city,
      }),
    }) // Aqui va la ruta
      .then((res) => res.json())
      .catch((error) => console.error("Error: ", error));
    alert("sede modificada" + this.state.name);
  }

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
          <img src={edit} alt="" height="25px" />
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
                      Create Sede
                    </div>
                    <div className="card-body">
                      <div className="container" style={{ padding: "10px" }}>
                        <form action="" className="form">
                          <div className="mb-3 row">
                            <label className="col-sm-3 col-form-label">
                              Name
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
                              Latitude
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
                              Longitude
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
                            <div className="col-sm-3 col-form-label">City</div>
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
                            cancel
                          </button>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                          <button
                            className="btn btn-success"
                            onClick={this.enviarSede}
                          >
                            Submit
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
