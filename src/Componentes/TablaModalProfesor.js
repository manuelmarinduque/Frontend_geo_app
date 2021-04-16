import React, { Component } from "react";
import { Modal } from "reactstrap";

// axios
import axios from "axios";
import { CropDinSharp } from "@material-ui/icons";

class TablaModalProfesor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre_profesor: "",
      numero_documento: "",
      direccion_residencia: "",
      numero_celular: "",
      genero: "",
      nacionalidad: "",
      fecha_ingreso: "",
      tipo_contrato: "",
      especialidad: "",
      modal1: false,
      modal2: false,
      confirm: false,
      title: this.props.title,
      profesores: [],
      id_profesor: "",
      unProfesor: {},
      sede: this.props.data.id_sede,
    };
  }

  infoProfesor = (id_profesor) => {
    this.setState({
      unProfesor: {},
    });

    this.state.profesores.forEach((profesor) => {
      if (profesor.id_profesor == id_profesor) {
        this.setState({
          unProfesor: profesor,
        });
        return;
      }
    });
  };

  toggle1 = (e) => {
    this.infoProfesor(e.target.id);

    this.setState({
      id_profesor: e.target.id,
      error: false,
      errorMessage: "",
      modal1: !this.state.modal1,
    });
  };

  toggle2 = () => {
    this.setState({
      error: false,
      errorMessage: "",
      modal2: !this.state.modal2,
    });
  };

  componentDidMount = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3500/profesor/obtener_profesores/",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });
      const profesores = response.data.data;
      let profesor_sede = [];
      profesores.map((profesor) => {
        if (profesor.id_sede == this.state.sede) {
          profesor_sede.push(profesor);
        }
      });

      this.setState({
        profesores: profesor_sede,
      });
      console.log(this.state.profesores);
    } catch (error) {
      console.log(error.message);
    }
  };

  handleClick1 = async () => {
    try {
      const response = await axios({
        url: "http://localhost:3500/profesor/actualizar_profesor",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
        data: {
          nombre_profesor:
            this.state.nombre_profesor == ""
              ? this.state.unProfesor.nombre_profesor
              : this.state.nombre_profesor,
          numero_documento:
            this.state.numero_documento == ""
              ? this.state.unProfesor.numero_documento
              : this.state.numero_documento,
          direccion_residencia:
            this.state.direccion_residencia == ""
              ? this.state.unProfesor.direccion_residencia
              : this.state.direccion_residencia,
          numero_celular:
            this.state.numero_celular == ""
              ? this.state.unProfesor.numero_celular
              : this.state.numero_celular,
          genero: this.state.unProfesor.genero,
          nacionalidad: this.state.unProfesor.nacionalidad,
          fecha_ingreso: this.state.unProfesor.fecha_ingreso,
          tipo_contrato: this.state.unProfesor.tipo_contrato,
          especialidad: this.state.unProfesor.especialidad,
          id_sede: this.state.sede,
          id_profesor: this.state.id_profesor,
        },
      });
      if (response.status == 200) {
        alert(response.data.message);
        this.setState({
          modal1: !this.state.modal1,
        });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  handleClick2 = async () => {
    console.log(this.state.id_profesor);
    try {
      const response = await axios({
        method: "DELETE",
        url: "http://localhost:3500/profesor/eliminar_profesor",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
        data: { id_profesor: this.state.id_profesor },
      });
      if (response.status == 200) {
        this.toggle2({});
      } else {
        alert("El ID del profesor dado no existe");
      }
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const editarForm = () => {
      return (
        <Modal
          isOpen={this.state.modal1}
          toggle={this.toggle1}
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
                      <h4 className="text-center text-info">
                        {this.state.title}
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="container" style={{ padding: "10px" }}>
                        <form action="" className="form">
                          <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">
                              Nombre
                            </label>
                            <div className="col-sm-8">
                              <input
                                name="nombre_profesor"
                                defaultValue={
                                  this.state.unProfesor.nombre_profesor
                                }
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">
                              Documento
                            </label>
                            <div className="col-sm-8">
                              <input
                                name="numero_documento"
                                defaultValue={
                                  this.state.unProfesor.numero_documento
                                }
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">
                              Direccion
                            </label>
                            <div className="col-sm-8">
                              <input
                                name="direccion_residencia"
                                defaultValue={
                                  this.state.unProfesor.direccion_residencia
                                }
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <div className="col-sm-4 col-form-label">
                              Celular
                            </div>
                            <div className="col-sm-8">
                              <input
                                name="numero_celular"
                                defaultValue={
                                  this.state.unProfesor.numero_celular
                                }
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
                            onClick={this.toggle1}
                          >
                            cancel
                          </button>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                          <button
                            className="btn btn-success"
                            onClick={this.handleClick1}
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
      );
    };

    const del = () => {
      return (
        <Modal
          isOpen={this.state.modal2}
          toggle={this.toggle2}
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
                      <h4 className="text-center text-info">
                        Eliminar Profesor
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="container" style={{ padding: "10px" }}>
                        <label htmlFor="">
                          Confirme el ID del Profesor que desea eliminar.
                        </label>
                        <input
                          name="id_profesor"
                          onChange={this.handleChange}
                          defaultValue={this.state.id_profesor}
                        />
                      </div>
                    </div>
                    <div className="card-footer bg-transparent">
                      <div className="row">
                        <div className="d-grid gap-2 col-6 mx-auto">
                          <button
                            className="btn btn-secondary"
                            onClick={this.toggle2}
                          >
                            cancel
                          </button>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                          <button
                            className="btn btn-danger"
                            onClick={this.handleClick2}
                          >
                            Eliminar
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
      );
    };

    return (
      <div className="container" title="Editar">
        <table className="table table-hover table-striped table-table-responsive-sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Documento</th>
              <th scope="col">Direccion</th>
              <th scope="col">Celular</th>
              <td colSpan="2">Acciones</td>
            </tr>
          </thead>
          <tbody>
            {this.state.profesores.map((profesor) => {
              return (
                <tr key={profesor.id_profesor}>
                  <th scope="row">{profesor.id_profesor}</th>
                  <th>{profesor.nombre_profesor}</th>
                  <th>{profesor.numero_documento}</th>
                  <th>{profesor.direccion_residencia}</th>
                  <th>{profesor.numero_celular}</th>
                  <th>
                    <button
                      key={profesor.id_profesor}
                      id={profesor.id_profesor}
                      className="btn btn-sm btn-warning block"
                      onClick={this.toggle1}
                    >
                      Editar
                    </button>
                  </th>
                  <th>
                    <button
                      id={profesor.id_profesor}
                      title="Eliminar"
                      className="btn btn-sm btn-danger block"
                      onClick={this.toggle2}
                    >
                      Eliminar
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
        {editarForm()}
        {del()}
      </div>
    );
  }
}

export default TablaModalProfesor;
