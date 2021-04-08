import React, { Component } from "react";
import { Modal } from "reactstrap";

class SedeFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      error: false,
      errorMessage: "",
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

  validateData = (e) => {
    //   name
    let nameRE = /[A-Za-z0-9]{2,}/;
    if (!nameRE.test(this.state.name)) {
      return { error: true, errorMessage: "Write a correct Name" };
    }

    // latitude and longitude
    let latitudeRE = /^[0-9]+\.[0-9]+$/;
    if (
      !latitudeRE.test(this.state.latitude) ||
      !latitudeRE.test(this.state.longitude)
    ) {
      return { error: true, errorMessage: "Write a correct latitude" };
    }

    let cityRE = /[A-Za-z]{2,20}/;
    if (!cityRE.test(this.state.name)) {
      return { error: true, errorMessage: "Write a correct City" };
    }

    let name = this.state.name;
    let latitude = this.state.latitude;
    let longitude = this.state.longitude;
    let city = this.state.city;

    const data = { name, latitude, longitude, city };

    return { error: false, data };
  };

  handleClick = async () => {
    const data = this.validateData();
    console.log(this.state);
    if (data.error) {
      this.setState({ error: true, errorMessage: data.errorMessage });
    } else {
      const dataPost = data.data;
      console.log(dataPost);
      const post = ""; //post
      if (post.error) {
        this.setState({ error: true, errorMessage: data.errorMessage });
      } else {
        alert("Sede created");
        this.toggle();
      }
    }
  };

  render() {
    return (
      <div className="container" style={{ padding: "10px", maxWidth: "720px" }}>
        <button className="btn" onClick={this.toggle}>
          Crear
          {/* <img src={user} alt="" height="30px" /> */}
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
