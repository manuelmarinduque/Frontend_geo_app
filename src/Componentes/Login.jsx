import React from "react";
import "../assets/Log.css";
import image from "../assets/images/cells.webp";
import { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero_documento: "",
      password: "",
      acces: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //componentDidMount() {
  //};

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5500/usuario/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 3ywg&hsnxu43o9+iaz&sdtr",
      },
      body: JSON.stringify({
        numero_documento: this.state.numero_documento,
        password: this.state.password,
      }),
    }) // Aqui va la ruta
      .then((res) => {
        res.json().then((data) => {
          if (data.token) {
            window.localStorage.setItem("documento", this.state.documento);
            window.localStorage.setItem("token", data.token);
            this.setState({ acces: true });
          }
        });
      })

      .catch((err) => {
        console.log("ERROR: " + err.message);
      });
    // alert('Bienvenido ' + this.state.usuario);
  }

  render() {
    if (!this.state.acces) {
      const { numero_documento, password } = this.state;
      return (
        <div class="wrapper fadeInDown">
          <div id="formContent">
            {/* <!-- Tabs Titles --> */}

            {/* <!-- Icon --> */}
            <div class="fadeIn first">
              <img src={image} id="icon" alt="User Icon" />
            </div>

            {/* <!-- Login Form --> */}
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                id="login"
                class="fadeIn second"
                name="numero_documento"
                placeholder="documento"
                value={numero_documento}
                onChange={this.handleChange}
              />
              <input
                type="password"
                id="password"
                class="fadeIn third"
                name="password"
                placeholder="password"
                value={password}
                onChange={this.handleChange}
              />

              <input type="submit" class="fadeIn fourth" value="Log In"/>
            </form>

            {/* <!-- Remind Passowrd --> */}
            <div id="formFooter">
              <a class="underlineHover" href="#">
                Forgot Password?
              </a>
              <br></br>
              <a class="underlineHover" href="/registro">
                  Registrarse    
              </a>
            </div>
          </div>
        </div>
      );
    }
    return <Redirect to="/home" childern="Nose" />;
  }
}

export default Login;
