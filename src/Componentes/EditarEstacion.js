import React, { Component } from "react";

class EditarEstacion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      phone: "",
      latitude: "",
      longitude: "",
      id: "",
      estaciones: [],
    };
    this.enviarEstacion = this.enviarEstacion.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.obtenerEstaciones();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  obtenerEstaciones() {
    fetch("http://localhost:3500/station/stations", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 3ywg&hsnxu43o9+iaz&sdtr",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ estaciones: data.estaciones });
        console.log(data.estaciones);
      })
      .catch((err) => console.log(err));
  }

  editarEstacion(id) {
    fetch("http://localhost:5500/station/:" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 3ywg&hsnxu43o9+iaz&sdtr",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          name: data.name,
          address: data.address,
          phone: data.phone,
          latitude: data.latitude,
          longitude: data.longitude,
          id: data.id,
        });
      });
  }

  enviarEstacion(e) {
    e.preventDefault();
    fetch("http://localhost:5500/station/update" + this.state.id, {
      method: "PUT",
      /*    headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 3ywg&hsnxu43o9+iaz&sdtr",
            },  */
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          name: "",
          address: "",
          phone: "",
          latitude: "",
          longitude: "",
          id: "",
        });
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="row">
        <div className="col-8">
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div>
                <h2>
                  <font color="black" size="5">
                    {" "}
                    Editar Estaciones
                  </font>
                </h2>
              </div>
            </nav>

            <table className="table">
              <thead>
                <tr>
                  <th>Nombre de la Estacion</th>
                  <th>Direccion</th>
                  <th>Telefono</th>
                  <th>Latitud</th>
                  <th>Longitud</th>
                  <th>Editar</th>
                </tr>
              </thead>
              <tbody>
                {this.state.estaciones.map((estacion) => {
                  return (
                    <tr key={estacion.id}>
                      <td>{estacion.name}</td>
                      <td>{estacion.address}</td>
                      <td>{estacion.phone}</td>
                      <td>{estacion.latitude}</td>
                      <td>{estacion.longitude}</td>
                      <td className="row">
                        <button
                          className="btn btn-primary"
                          onClick={() => this.editarEstacion(estacion.id)}
                        >
                          <i className="small material-icons">edit</i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-4">
          <div className="container">
            <div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Estacion</h5>
                  <form onSubmit={this.enviarEstacion}>
                    <div className="row">
                      <div className="form-group col-12">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Nombre"
                          value={this.state.name}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-12">
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          placeholder="Direccion"
                          value={this.state.address}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-12">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Telefono"
                          value={this.state.phone}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-12">
                        <input
                          type="text"
                          name="latitude"
                          className="form-control"
                          placeholder="Latitud"
                          value={this.state.latitude}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-12">
                        <input
                          type="text"
                          name="longitude"
                          className="form-control"
                          placeholder="Longitud"
                          value={this.state.longitude}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="row col-5">
                      <div className="form-group col-12">
                        <button type="submit" className="btn btn-primary">
                          Guardar
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditarEstacion;
