import React, { Component } from "react";
import { Modal } from "reactstrap";
import edit from "../assets/images/editSede.webp";

import axios from "axios";

class SedeFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      error: false,
      errorMessage: "",
      data: this.props.data,
    };
  }

  componentDidMount = async () => {};

  toggle = () => {
    this.setState({
      error: false,
      errorMessage: "",
      modal: !this.state.modal,
    });
  };

  handleCahnge = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div
        className="container"
        title="Edit"
        style={{ padding: "10px", maxWidth: "720px" }}
      >
        <button
          className="btn"
          onClick={this.toggle}
          style={{ borderRadius: "50%" }}
        >
          <img src={edit} alt="" height="30px" />
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          fullscreen="below sm"
        >
          <div className="modal-body">
            <div className="row">
              <div className="offset col-md-12">
                <div className="container">
                  <div className="card border-dark mb-3">
                    <div
                      className="card-header bg-transparent"
                      style={{ textAlign: "center" }}
                    >
                      Create Sede
                    </div>
                    <div className="card-body">
                      <div className="container" style={{ padding: "10px" }}>
                        <form action="" className="form">
                          <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">
                              Name
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                name="name"
                                value={this.state.data.name}
                                // placeholder="Akiles"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">
                              Latitude
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                name="latitude"
                                value={this.state.data.latitude}
                                // placeholder="Salto"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">
                              Longitude
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                name="longitude"
                                value={this.state.data.longitude}
                                // placeholder="akiles@correo.com"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <div className="col-sm-4 col-form-label">City</div>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                name="city"
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
                            onClick={this.toggle}
                          >
                            cancel
                          </button>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                          <button
                            className="btn btn-success"
                            onClick={this.handleClick}
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
      </div>
    );
  }
}

export default SedeFormModal;
