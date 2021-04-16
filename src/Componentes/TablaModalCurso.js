import React, { Component } from "react";
import { Modal } from "reactstrap";

// axios
import axios from "axios";

class TablaModalCurso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre_curso: "",
      codigo_curso: "",
      descripcion: "",
      creditos: "",
      modal1: false,
      modal2: false,
      confirm: false,
      title: this.props.title,
      cursos: [],
      id_curso: "",
      unCurso: {},
      sede: this.props.data.id_sede,
    };
  }

  infoCurso = (id_curso) => {
    this.setState({
      unCurso: {},
    });
    this.state.cursos.forEach((curso) => {
      if (curso.id_curso == id_curso) {
        this.setState({
          unCurso: curso,
        });
        return;
      }
    });
  };

  toggle1 = (e) => {
    try {
      this.infoCurso(e.target.id);
    } catch (e) {
      console.log("null");
    }
    this.setState({
      id_curso: e.target.id,
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
      });
      const cursos = response.data.data;
      let cursos_sede = [];
      cursos.map((curso) => {
        if (curso.id_sede == this.state.sede) {
          cursos_sede.push(curso);
        }
      });
      this.setState({
        cursos: cursos_sede,
      });
      console.log(this.state.cursos);
    } catch (error) {
      console.log(error.message);
    }
  };

  async componentWillUnmount() {
    console.log("componente se esta desmontando");
    await this.setState({
      cursos: [],
    });
  }

  handleClick1 = async () => {
    try {
      const response = await axios({
        url: "http://localhost:3500/curso/actualizar_curso",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
        data: {
          nombre_curso:
            this.state.nombre_curso == ""
              ? this.state.unCurso.nombre_curso
              : this.state.nombre_curso,
          codigo_curso:
            this.state.codigo_curso == ""
              ? this.state.unCurso.codigo_curso
              : this.state.codigo_curso,
          descripcion:
            this.state.descripcion == ""
              ? this.state.unCurso.descripcion
              : this.state.descripcion,
          creditos:
            this.state.creditos == ""
              ? this.state.unCurso.creditos
              : this.state.creditos,
          id_sede: this.state.sede,
          id_curso: this.state.id_curso,
        },
      });
      if (response.status == 200) {
        alert(response.data.message);
        this.setState({
          modal1: !this.state.modal1,
        });
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  handleClick2 = async () => {
    console.log(this.state.id_curso);
    try {
      const response = await axios({
        method: "DELETE",
        url: "http://localhost:3500/curso/eliminar_curso",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
        data: { id_curso: this.state.id_curso },
      });
      if (response.status === 200) {
        this.toggle2();
      } else {
        alert(response.data.message);
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
                                name="nombre_curso"
                                defaultValue={this.state.unCurso.nombre_curso}
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
                                name="codigo_curso"
                                defaultValue={this.state.unCurso.codigo_curso}
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
                                defaultValue={this.state.unCurso.descripcion}
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
                                defaultValue={this.state.unCurso.creditos}
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
                          name="id_curso"
                          onChange={this.handleChange}
                          defaultValue={this.state.id_curso}
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
                <tr key={curso.id_curso}>
                  <th scope="row">{curso.id_curso}</th>
                  <th>{curso.nombre_curso}</th>
                  <th>{curso.codigo_curso}</th>
                  <th>{curso.creditos}</th>
                  <th>
                    <button
                      key={curso.id_curso}
                      id={curso.id_curso}
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
