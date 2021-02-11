import React from "react";
import "../assets/Log.css";
import jwt from "jsonwebtoken";
import image from "../assets/images/new-user.png";
import { Component } from "react";


class registroUsuarios extends Component{
    constructor(props){
      super(props);
      this.state = {
        usuario :"",
        contraseña :"",
        tipo:"",
        nombre:"",
        genero:"",
        nacionalidad:"",
        direccion:"",
        telefono:"",
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
      fetch("http://localhost:3500/user/create_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 3ywg&hsnxu43o9+iaz&sdtr"
        },
        body:JSON.stringify({doc_number: this.state.usuario, 
                             password: this.state.contraseña,
                             doc_type: this.state.tipo, 
                             full_name: this.state.nombre,
                             genre: this.state.genero, 
                             nacionality:this.state.nacionalidad,
                             address:this.state.direccion,
                             phone:this.state.telefono})
      }) // Aqui va la ruta
        .then((res) => res.json())
        .catch(error => console.error('Error: ',error))
        .then((data) => {data1 = jwt.verify(data.token, "3ywg&hsnxu43o9+iaz&sdtr",function (err, dat) {
              return dat;
            }
          )
        }
        )
        alert('Usuario Registrado' + this.state.usuario); 
    };


    render(){
        const { usuario, contraseña, tipo, nombre, genero, nacionalidad, direccion, telefono} = this.state;  
        return (
        <div class="wrapper fadeInDown">
            <div id="formContent">
                {/* <!-- Tabs Titles --> */}
            
                {/* <!-- Icon --> */}
                <div class="fadeIn first" >
                    <img src={image} id="icon" alt="User Icon" />
                </div>
            
                {/* <!-- Login Form --> */}
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    id="usuario"
                    class="fadeIn second"
                    name="usuario"
                    placeholder="identificacion"
                    value = {usuario}
                    onChange={this.handleChange}
                    />
                    <input
                     type="password"
                     id="password"
                     class="fadeIn third"
                     name="contraseña"
                     placeholder="contraseña"
                     value = {contraseña}
                     onChange={this.handleChange}
                    />
                    <input
                     type="text"
                     id="tipo"
                     class="fadeIn fourth"
                     name="tipo"
                     placeholder="tipo de documento"
                     value = {tipo}
                     onChange={this.handleChange}
                    />
                    <input
                     type="text"
                     id="nombre"
                     class="fadeIn fifth"
                     name="nombre"
                     placeholder="Nombre Completo"
                     value = {nombre}
                     onChange={this.handleChange}
                    />
                    <input
                     type="text"
                     id="genero"
                     class="fadeIn sixth"
                     name="genero"
                     placeholder="genero"
                     value = {genero}
                     onChange={this.handleChange}
                    />
                    <input
                     type="text"
                     id="nacionalidad"
                     class="fadeIn seventh"
                     name="nacionalidad"
                     placeholder="nacionalidad"
                     value = {nacionalidad}
                     onChange={this.handleChange}
                    />
                    <input
                     type="text"
                     id="direccion"
                     class="fadeIn eighth"
                     name="direccion"
                     placeholder="direccion"
                     value = {direccion}
                     onChange={this.handleChange}
                    />
                    <input
                     type="text"
                     id="telefono"
                     class="fadeIn ninth"
                     name="telefono"
                     placeholder="telefono"
                     value = {telefono}
                     onChange={this.handleChange}
                    />

                    <input type="submit" class="fadeIn tenth" value="Registrar" />
                    </form>
            
                </div>
            </div>
        );
    }  
}

export default registroUsuarios;