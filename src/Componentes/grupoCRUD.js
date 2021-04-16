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

class Grupo extends React.Component {
    state = {
 /*       data: data,
        modalActualizar: false,
        modalInsertar: false,
        modalInsertar1: false,
        form: {
            id: "",
            personaje: "",
            anime: "",
        },
    };
*/
    constructor(props) {
        super(props);
        this.state = {
            modalActualizar: false,
            modalInsertar: false,
            modalInsertar1: false,
            data: this.props.data,
            id_grupo: this.props.data.id_grupo,
            codigo_grupo: this.props.data.codigo_grupo,
            semestre: this.props.data.semestre,
            cupo_estudiantes: this.props.data.cupo_estudiantes,
            total_estudiantes: this.props.data.total_estudiantes,
            id_sede:this.props.data.id_sede,
        };

        this.handleChange = this.handleChange.bind(this);
        this.editar = this.editar.bind(this);
    }


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
                            <div><h3>EDITAR GRUPO</h3></div>
                        </ModalHeader>

                        <ModalBody>

                            <FormGroup>
                                <label>
                                    Codigo del Grupo:
                                </label>
                                <input
                                    className="form-control"
                                    name="codigo_grupo"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.codigo_grupo}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Semestre:
                                </label>
                                <input
                                    className="form-control"
                                    name="semestre"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.semestre}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Cupo de Estudiantes:
                                </label>
                                <input
                                    className="form-control"
                                    name="cupo_estudiantes"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.cupo_estudiantes}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Total Estudiantes:
                                </label>
                                <input
                                    className="form-control"
                                    name="total_estudiantes"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.total_estudiantes}
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
                            <div><h3>Grupo</h3></div>
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
                                                <th>Cod. Grupo</th>
                                                <th>Acción</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {this.state.data.map((dato) => (
                                                <tr key={dato.id}>
                                                    <td>{dato.codigo_grupo}</td>
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
                            <div><h3>Crear Grupo</h3></div>
                        </ModalHeader>

                        <ModalBody>

                            <FormGroup>
                                <label>
                                    Codigo Grupo:
                                </label>
                                <input
                                    className="form-control"
                                    name="codigo_grupo"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Semestre:
                                </label>
                                <input
                                    className="form-control"
                                    name="semestre"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Cupo de Estudiantes:
                                </label>
                                <input
                                    className="form-control"
                                    name="cupo_estudiantes"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Total de Estudiantes:
                                </label>
                                <input
                                    className="form-control"
                                    name="total_estudiantes"
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
export default Grupo;