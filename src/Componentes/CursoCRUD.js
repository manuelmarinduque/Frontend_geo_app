import React from "react";
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
} from "reactstrap";

const data = [
    { id: 1, personaje: "Naruto", anime: "Naruto" },
    { id: 2, personaje: "Goku", anime: "Dragon Ball" },
    { id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin" },
    { id: 4, personaje: "Monkey D. Luffy", anime: "One Piece" },
    { id: 5, personaje: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood" },
    { id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!" },
];

class Curso extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        modalInsertar1: false,
        form: {
            numero_doc: "",
            nombre_profesor: "",
            direccion_residencia:"",
            numero_celular: "",
            genero:"",
            nacionalidad:"",
            fecha_ingreso:"",
            tipo_contrato:"",
            especialidad:"",
            id_sede:"",
        },
    };

    mostrarModalActualizar = (dato) => {
        this.setState({
            form: dato,
            modalActualizar: true,
        });
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true,
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    mostrarModalCrear = () => {
        this.setState({
            modalInsertar1: true,
        });
    };

    cerrarModalInsertar1 = () => {
        this.setState({ modalInsertar1: false });
    };

    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
            if (dato.id == registro.id) {
                arreglo[contador].personaje = dato.personaje;
                arreglo[contador].anime = dato.anime;
            }
            contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };

    eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + dato.id);
        if (opcion == true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
                if (dato.id == registro.id) {
                    arreglo.splice(contador, 1);
                }
                contador++;
            });
            this.setState({ data: arreglo, modalActualizar: false });
        }
    };

    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.data.length + 1;
        var lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {

        return (
            <>
                <div className="container">

                    <Button color="success" onClick={() => this.mostrarModalInsertar()}>Crear</Button>


                    <Modal isOpen={this.state.modalActualizar}>
                        <ModalHeader>
                            <div><h3>EDITAR CURSO</h3></div>
                        </ModalHeader>

                        <ModalBody>

                            <FormGroup>
                                <label>
                                    Nombre del Curso:
                                </label>
                                <input
                                    className="form-control"
                                    name="personaje"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.form.personaje}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Codigo del Curso:
                                </label>
                                <input
                                    className="form-control"
                                    name="anime"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.form.anime}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Descripcion:
                                </label>
                                <input
                                    className="form-control"
                                    name="anime"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.form.anime}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Creditos:
                                </label>
                                <input
                                    className="form-control"
                                    name="anime"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.form.anime}
                                />
                            </FormGroup>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                color="primary"
                                onClick={() => this.editar(this.state.form)}
                            >
                                Editar
                            </Button>
                            <Button
                                color="danger"
                                onClick={() => this.cerrarModalActualizar()}
                            >
                                Cancelar
                            </Button>
                        </ModalFooter>
                    </Modal>



                    <Modal isOpen={this.state.modalInsertar}>

                        <ModalHeader>
                            <div><h3>Cursos</h3></div>
                        </ModalHeader>

                        <ModalBody>
                            <div>
                                <Container className="col-12">
                                    <br />
                                    <Button color="success" onClick={() => this.mostrarModalCrear()}>Crear</Button>
                                    <br />
                                    <br />
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Nombre Curso</th>
                                                <th>Acción</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {this.state.data.map((dato) => (
                                                <tr key={dato.id}>
                                                    <td>{dato.id}</td>
                                                    <td>{dato.personaje}</td>
                                                    <td>
                                                        <Button
                                                            color="primary"
                                                            onClick={() => this.mostrarModalActualizar(dato)}
                                                        >
                                                            Editar
                                                </Button>{" "}
                                                        <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Container>
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                color="primary"
                                onClick={() => this.insertar()}
                            >
                                Insertar
                             </Button>
                            <Button
                                className="btn btn-danger"
                                onClick={() => this.cerrarModalInsertar()}
                            >
                                Cancelar
                            </Button>
                        </ModalFooter>
                    </Modal>




                    <Modal isOpen={this.state.modalInsertar1}>
                        <ModalHeader>
                            <div><h3>Crear Curso</h3></div>
                        </ModalHeader>

                        <ModalBody>

                            <FormGroup>
                                <label>
                                    Nombre del Curso:
                                </label>
                                <input
                                    className="form-control"
                                    name="personaje"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Codigo Curso:
                                </label>
                                <input
                                    className="form-control"
                                    name="anime"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Desrcipcion:
                                </label>
                                <input
                                    className="form-control"
                                    name="anime"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Creditos:
                                </label>
                                <input
                                    className="form-control"
                                    name="anime"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                color="primary"
                                onClick={() => this.insertar()}
                            >
                                Insertar
                            </Button>
                            <Button
                                className="btn btn-danger"
                                onClick={() => this.cerrarModalInsertar1()}
                            >
                                Cancelar
                             </Button>
                        </ModalFooter>
                    </Modal>

                </div>
            </>
        );
    }
}
export default Curso;