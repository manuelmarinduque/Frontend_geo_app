import React from "react";
import "../assets/Log.css";
import jwt from "jsonwebtoken";
import image from "../assets/images/cells.webp";
import { Component } from "react";


class Login extends Component{
    constructor(props){
      super(props);
      this.state = {
        usuario :"",
        contraseña :"",
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);


    }
    //componentDidMount() {
    //};
  
    handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
  };

    handleSubmit(e) {
      var data1 =""
      e.preventDefault();
      fetch("http://localhost:3500/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 3ywg&hsnxu43o9+iaz&sdtr"
        },
        body:JSON.stringify({doc_number: this.state.usuario, password: this.state.contraseña})
      }) // Aqui va la ruta
        .then((res) => res.json())
        .catch(error => console.error('Error: ',error))
        .then((data) => {data1 = jwt.verify(data.token, "3ywg&hsnxu43o9+iaz&sdtr",function (err, dat) {
              return dat;
            }
          )
        }
        )
        .then((response => console.log('success: ', response)))
        .catch(console.log)
        alert('Bienvenido ' + this.state.usuario);
    };

    render(){
        const { usuario, contraseña} = this.state;  
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
                    name="usuario"
                    value = {usuario}
                    onChange={this.handleChange}
                    />
                    <input
                     type="password"
                     id="password"
                     class="fadeIn third"
                     name="contraseña"
                     value = {contraseña}
                     onChange={this.handleChange}
                    />

                    <input type="submit" class="fadeIn fourth" value="Log In" />
                    </form>
            
                {/* <!-- Remind Passowrd --> */}
                <div id="formFooter">
                    <a class="underlineHover" href="#">
                     Forgot Password?
                    </a>
                </div>
                </div>
            </div>
        );
    }  
}

export default Login;