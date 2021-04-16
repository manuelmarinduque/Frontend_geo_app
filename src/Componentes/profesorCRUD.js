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

class Profesor extends React.Component {
 /*
    state = {
        data: data,
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
                id_profesor: this.props.data.id_profesor,
                nombreProfesor: this.props.data.nombre_profesor,
                numeroDocumento: this.props.data.numero_documento,
                direccionResidencia: this.props.data.direccion_residencia,
                numeroCelular: this.props.data.numero_celular,
                genero: this.props.data.genero,
                nacionalidad: this.props.data.nacionalidad,
                fechaIngreso: this.props.data.fecha_ingreso,
                tipoContrato: this.props.data.tipo_contrato,
                especialidad: this.props.data.especialidad,
                id_sede:this.props.data.id_sede,
            };

            this.handleChange = this.handleChange.bind(this);
            this.editar = this.editar.bind(this);
        }

    mostrarModalActualizar = (dato) => {   // revisar funcionamiento
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

    /*    codigo original donde se tomo 
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
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento ");
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
    */

    render() {

        return (
            <>
                <div className="container">

                    <Button color="success" onClick={() => this.mostrarModalInsertar()}>Profesor</Button>


                    <Modal isOpen={this.state.modalActualizar}>
                        <ModalHeader>
                            <div><h3>EDITAR PROFESOR</h3></div>
                        </ModalHeader>

                        <ModalBody> 

                            <FormGroup>
                                <label>
                                    Nombre del Profesor:
                                </label>
                                <input
                                    className="form-control"
                                    name="nombreProfesor"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.nombreProfesor}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Numero del Documento:
                                </label>
                                <input
                                    className="form-control"
                                    name="numeroDocumento"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.numeroDocumento}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Direccion de Residencia:
                                </label>
                                <input
                                    className="form-control"
                                    name="direccionResidencia"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.direccionResidencia}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Numero de Celular:
                                </label>
                                <input
                                    className="form-control"
                                    name="numeroCelular"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.numeroCelular}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Genero:
                                </label>
                                <input
                                    className="form-control"
                                    name="genero"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.genero}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Nacionalidad:
                                </label>
                                <input
                                    className="form-control"
                                    name="nacionalidad"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.nacionalidad}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Fecha de Ingreso:
                                </label>
                                <input
                                    className="form-control"
                                    name="fechaIngreso"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.fechaIngreso}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Tipo de Contrato:
                                </label>
                                <input
                                    className="form-control"
                                    name="tipoContrato"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.tipoContrato}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Especialidad:
                                </label>
                                <input
                                    className="form-control"
                                    name="especialidad"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.especialidad}
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
                            <div><h3>Profesores</h3></div>
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
                                                <th>Nombre</th>
                                                <th>Numero Doc</th>
                                                <th>Acción</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {this.state.data.map((dato) => (
                                                <tr key={dato.id}>
                                                    <td>{dato.nombre_profesor}</td>
                                                    <td>{dato.numero_documento}</td>
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
                            <div><h3>Registrar Profesor</h3></div>
                        </ModalHeader>

                        <ModalBody>

                            <FormGroup>
                                <label>
                                    Nombre del Profesor:
                                </label>
                                <input
                                    className="form-control"
                                    name="nombreProfesor"
                                    type="text"
                                    value={this.state.nombreProfesor}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Numero de Documento:
                                </label>
                                <input
                                    className="form-control"
                                    name="numeroDocumento"
                                    type="text"
                                    value={this.state.numeroDocumento}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Direccion de Residencia:
                                </label>
                                <input
                                    className="form-control"
                                    name="anime"
                                    type="text"
                                    value={this.state.direccion_residencia}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Numero de Celular:
                                </label>
                                <input
                                    className="form-control"
                                    name="numeroCelular"
                                    type="text"
                                    value={this.state.numeroCelular}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Genero:
                                </label>
                                <input
                                    className="form-control"
                                    name="genero"
                                    type="text"
                                    value={this.state.genero}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Nacionalidad:
                                </label>
                                <input
                                    className="form-control"
                                    name="nacionalidad"
                                    type="text"
                                    value={this.state.nacionalidad}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Fecha de Ingreso:
                                </label>
                                <input
                                    className="form-control"
                                    name="fechaIngreso"
                                    type="text"
                                    value={this.state.fechaIngreso}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Tipo de Contrato:
                                </label>
                                <input
                                    className="form-control"
                                    name="tipoContrato"
                                    type="text"
                                    value={this.state.tipoContrato}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Especialidad:
                                </label>
                                <input
                                    className="form-control"
                                    name="especialidad"
                                    type="text"
                                    value={this.state.especialidad}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                color="primary"
                                onClick={() => this.insertar()}
                            >
                                Registrar
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
export default Profesor;