import React, { Component } from "react";
import { Modal } from "reactstrap";
import edit from "../assets/images/editSede.webp";

// axios
import axios from "axios";

// components
import TablaModalCurso from "./TablaModalCurso";

class VerModalCurso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: false,
      data: this.props.data,
      title: this.props.title,
    };
  }

  toggle = () => {
    this.setState({
      error: false,
      errorMessage: "",
      modal: !this.state.modal,
    });
  };

  handleClick = async () => {
    try {
    } catch (err) {}
  };

  render() {
    return (
      <div className="container" title="Registros">
        <button className="btn btn-outline-dark" onClick={this.toggle}>
          Registros
        </button>
        <Modal
          size="lg"
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
                      <h4 className="text-center text-info">
                        {this.state.title}
                      </h4>
                    </div>
                    <div className="card-body">
                      <TablaModalCurso
                        title="Editar Sede"
                        data={this.state.data}
                      />
                    </div>
                    <div className="card-footer bg-transparent">
                      <div className="row">
                        <div className="d-grid gap-2 col-6 mx-auto">
                          <button
                            className="btn btn-success block"
                            onClick={this.toggle}
                          >
                            Volverrr
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

export default VerModalCurso;
