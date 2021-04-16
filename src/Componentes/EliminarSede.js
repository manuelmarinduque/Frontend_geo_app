import React, { Component } from "react";
import { Modal } from "reactstrap";

// axios
import axios from "axios";

// image
import del from "../assets/images/delete.webp";

class EliminarSede extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: false,
      data = this.props.data,
    };
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

  handleClick = async () => {};

  render() {
    return (
      <div className="container" title="Delete">
        <button
          className="btn"
          onClick={this.toggle}
          style={{ borderRadius: "50%", padding: "1px" }}
        >
          <img src={del} alt="" height="25px" />
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
                      Eliminar Sede
                    </div>
                    <div className="card-body">
                      <div className="container" style={{ padding: "10px" }}>
                        <form action="" className="form"></form>
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
                            className="btn btn-danger"
                            onClick={this.handleClick}
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
      </div>
    );
  }
}

export default EliminarSede;
