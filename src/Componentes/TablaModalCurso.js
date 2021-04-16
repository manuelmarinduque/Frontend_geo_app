import React, { Component } from "react";
import { Modal } from "reactstrap";

// axios
import axios from "axios";

class TablaModalCurso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      confirm: false,
      title: this.props.title,
      cursos: [],
      id: "",
      sede: this.props.data.id_sede,
    };
    console.log(this.state.sede);
  }

  toggle1 = () => {
    this.setState({
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
        url: "http://localhost:3500/curso/obtener_cursos_sede/",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
        params: {
          id_sede: this.state.sede,
        },
      });
      const cursos = response.data.data;
      this.setState({
        cursos: cursos,
      });
      console.log(this.state.cursos);
    } catch (error) {
      console.log(error.message);
    }
  };

  handleClick1 = async () => {
    try {
    } catch (err) {}
  };

  handleClick2 = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:3500/curso/eliminar_curso",
        { id_curso: this.state.id }
      );
      console.log(response.data);
    } catch (err) {}
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

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
                                name="nombre"
                                // defaultValue={info.nombre_curso}
                                // placeholder="Akiles"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">
                              Codigo
                            </label>
                            <div className="col-sm-8">
                              <input
                                name="codigo"
                                // defaultValue={info.codigo_curso}
                                // placeholder="Salto"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">
                              Descripcion
                            </label>
                            <div className="col-sm-8">
                              <input
                                name="descripcion"
                                // defaultValue={info.descripcion}
                                // placeholder="akiles@correo.com"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <div className="col-sm-4 col-form-label">
                              Creditos
                            </div>
                            <div className="col-sm-8">
                              <input
                                name="creditos"
                                // defaultValue={info.creditos}
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
                      <h4 className="text-center text-info">Eliminar Curso</h4>
                    </div>
                    <div className="card-body">
                      <div className="container" style={{ padding: "10px" }}>
                        <label htmlFor="">
                          Confirme el ID del curso que desea eliminar.
                        </label>
                        <input
                          name="id"
                          onChange={this.handleChange}
                          defaultValue={this.state.id}
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
              <th scope="col">Código</th>
              <th scope="col">Créditos</th>
              <td colSpan="2">Acción</td>
            </tr>
          </thead>
          <tbody>
            {this.state.cursos.map((curso) => {
              return (
                <tr key={curso.id}>
                  <th scope="row">{curso.id_curso}</th>
                  <th>{curso.nombre_curso}</th>
                  <th>{curso.codigo_curso}</th>
                  <th>{curso.creditos}</th>
                  <th>
                    <button
                      className="btn btn-sm btn-warning block"
                      onClick={this.toggle1}
                    >
                      Editar
                    </button>
                  </th>
                  <th>
                    <button
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

export default TablaModalCurso;
