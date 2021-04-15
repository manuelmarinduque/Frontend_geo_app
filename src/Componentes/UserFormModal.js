import React, { Component } from "react";
import { Modal, Button } from "reactstrap";

// icons
import user from "../assets/images/user+.png";

class UserFormModal extends Component {
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

  validateData() {
    this.setState({ error: false, errorMessage: "" });
    // empty
    if (
      this.state.firstName === undefined ||
      this.state.lastName === undefined ||
      this.state.password === undefined
    ) {
      return { error: true, errorMessage: "All camps are mandatory" };
    }

    // name
    let name = /[A-Za-z]{2,15}/;
    if (!name.test(this.firstName)) {
      return { error: true, errorMessage: "Write correct First Name" };
    }
    if (!name.test(this.lastName)) {
      return { error: true, errorMessage: "Write correct Last Name" };
    }

    // email
    let mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!mail.test(this.state.email)) {
      return { error: true, errorMessage: "Write correct email" };
    }

    // password
    let pass = /[\w]{8,15}$/;
    if (!pass.test(this.state.password)) {
      return {
        error: true,
        errorMessage: "Password must be between 8 and 15 digits long",
      };
    }
    if (this.state.password !== this.state.confirmPass) {
      return { error: true, errorMessage: "Passwords don't match" };
    }

    // gender
    if (this.state.gender === undefined) {
      return { error: true, errorMessage: "Choose a gender, idiot!" };
    }

    // document
    let doc = /[0-9]{7,11}/;
    if (!doc.test(this.state.document)) {
      return { error: true, errorMessage: "Digit a correct document" };
    }

    // phone
    let cel = /[0-9]{10}/;
    if (!cel.test(this.state.phone)) {
      return { error: true, errorMessage: "Digit a correct cellular phone" };
    }

    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let password = this.state.password;
    let email = this.state.email;
    let document = this.state.document;
    let phone = this.state.phone;

    let data = { firstName, lastName, password, email, document, phone };
    return { error: false, data };
  }

  validatePost = async () => {
    // valid post
    return false;
  };

  handleClick = async (e) => {
    const data = this.validateData();
    if (data.error) {
      this.setState({ error: true, errorMessage: data.errorMessage });
    } else {
      const dataPost = data.data;
      console.log(dataPost);
      const post = ""; //post
      if (post.error) {
        this.setState({ error: true, errorMessage: data.errorMessage });
      } else {
        alert("User created");
        this.toggle();
      }
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="container" style={{ padding: "10px", maxWidth: "720px", maxHeight: "600px" }}>
        <button className="btn" onClick={this.toggle}>
          Crear
          {/* <img src={user} alt="" height="30px" /> */}
        </button>
        {/* <label htmlFor="">Crear</label> */}
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
                      Create User
                    </div>
                    <div className="card-body">
                      <div className="container" style={{ padding: "10px" }}>
                        <form action="" className="form">
                          <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">
                              First Name
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                name="firstName"
                                // placeholder="Akiles"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">
                              Last Name
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                name="lastName"
                                // placeholder="Salto"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">
                              Email
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="email"
                                name="email"
                                // placeholder="akiles@correo.com"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <div className="col-sm-4 col-form-label">
                              Password
                            </div>
                            <div className="col-sm-8">
                              <input
                                type="password"
                                name="password"
                                // placeholder="password"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <div className="col-sm-4 col-form-label">
                              Confirm
                            </div>
                            <div className="col-sm-8">
                              <input
                                type="password"
                                name="confirmPass"
                                // placeholder="confirm password"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">
                              Gender
                            </label>
                            <div className="col-sm-8">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gender"
                                  value="female"
                                  onChange={this.handleChange}
                                />
                                <label className="form-check-label">
                                  Female
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gender"
                                  value="male"
                                  onChange={this.handleChange}
                                />
                                <label className="form-check-label">Male</label>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">
                              Document
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                name="document"
                                // placeholder="Cedula"
                                className="form-control"
                                onChange={this.handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 row">
                            <label className="col-sm-4 col-form-label">
                              Phone
                            </label>
                            <div className="col-sm-8">
                              <input
                                type="text"
                                name="phone"
                                // placeholder="3123657841"
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

export default UserFormModal;
