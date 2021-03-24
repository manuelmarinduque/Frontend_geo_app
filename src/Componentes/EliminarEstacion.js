import React, { Component } from "react";
import { FormGroup, Row, Col, Form, Input, Label, Button } from 'reactstrap';
import image from "../assets/images/cells.webp";

class EditarEstacion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            address: "",
            phone: "",
            latitude: "",
            longitude: "",
            id:"",
            estaciones: [],
        };

    }

    componentDidMount() {
        this.obtenerEstaciones();
    }


    obtenerEstaciones() {
        fetch('http://localhost:3500/station/stations'     // enn el backend cambie la ruta
                , {
                      method: "GET",
                      headers: {
                          "Content-Type": "application/json",
                          "Authorization": "Bearer 3ywg&hsnxu43o9+iaz&sdtr"
                      }
                  })
            .then(res => res.json())
            .then(data => {
                this.setState({ estaciones: data.estaciones });
                console.log(data.estaciones)
            })
            .catch(err => console.log(err))
    }


    eliminarEstacion(id) {
        fetch('http://localhost:3500/station/delete' + id, {
            method: "DELETE",
         /*   headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 3ywg&hsnxu43o9+iaz&sdtr"
            }   
         */
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.obtenerEstaciones()
            })
    }


    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                            <div>
                                <h2>
                                    <font color="black" size="5"> Eliminar Estaciones</font>
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
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.estaciones.map(estacion => {
                                        return (
                                            <tr key={estacion.id}>
                                                <td>{estacion.name}</td>
                                                <td>{estacion.address}</td>
                                                <td>{estacion.phone}</td>
                                                <td>{estacion.latitude}</td>
                                                <td>{estacion.longitude}</td>
                                                <td className="row">
                                                    <button className="btn btn-primary"
                                                        onClick={() => this.eliminarEstacion(estacion.id)}>
                                                        <i className="small material-icons">delete</i>
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                 </div>
            </div>
        )
    }

}
export default EditarEstacion;