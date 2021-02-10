import React, { Component } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';

const url="http://localhost:3000/create_user";
//http://localhost:3000/get_data

console.log(url);

class InicioSesion extends Component{

  state={
    data:[], 
    modalRegistrar: false,
    form:{
      user_id: '',
      name: '',
      dni: '',
      type: '',
      gender: '',
      nationality: '',
      phone: '',
      address: '',
      password:''
    }
  }

  modalRegistrar=()=> {
    this.setState({modalRegistrar: !this.state.modalRegistrar});
  }

  handleChange= async e => {
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state.form)
  }

  peticionGet=()=> {
    axios.get(url).then(response=>(
      console.log(response.data)
      //this.setState({data: response.data}) para mostrar los datos donde deseemos
    ))
  }

  peticionPost=async ()=>{
    delete this.state.form.user_id;
    await axios.post(url, this.state.form).them(response=>{
      this.modalRegistrar();
      this.peticionGet();
    }).catch(error=>{
      console.log(error.message)
    })
  }

  componentDidMount(){
    this.peticionGet();
  }

  render(){
    const {form} = this.state;
    //const form = this.state.form;    //las dos formas son lo mismo
    //<button className='btn btn-success' onClick={()=>this.modalRegistrar()}> </button>
    return(
      <div>
    <ListItem button onClick={()=>this.modalRegistrar()}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Login" />
    </ListItem>
        
        <Modal isOpen={this.state.modalRegistrar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} type="button" class="close" data-dismiss="modal" onClick={() =>this.modalRegistrar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="user_id" id="id" readOnly 
                    value={this.state.data.lenght+1}/>
                    
                     <label htmlFor="nombre">Nombre</label>
                    <input className="form-control" type="text" name="name" id="name" 
                    onChange={this.handleChange} value={form.name} />

                    <label htmlFor="documento">Nuemro de Documento</label>
                    <input className="form-control" type="text" name="dni" id="dni"  
                    onChange={this.handleChange} value={form.dni}/>
                    
                    <label htmlFor="tipo">Tipo de Documento</label>
                    <input className="form-control" type="text" name="type" id="type"  
                    onChange={this.handleChange} value={form.type}/>
                  
                    <label htmlFor="sexo">Sexo</label>
                    <input className="form-control" type="text" name="gender" id="gender"  
                    onChange={this.handleChange} value={form.gender}/>
                    
                    <label htmlFor="nacionalidad">Nacionalidad</label>
                    <input className="form-control" type="text" name="nationality" id="nationality"  
                    onChange={this.handleChange} value={form.nationality}/>
                    
                    <label htmlFor="telefono">Telefono</label>
                    <input className="form-control" type="text" name="phone" id="phone"  
                    onChange={this.handleChange} value={form.phone}/>
                  
                    <label htmlFor="direccion">Direccion</label>
                    <input className="form-control" type="text" name="address" id="address"  
                    onChange={this.handleChange} value={form.address}/>
          
                    <label htmlFor="contraseña">Contraseña</label>
                    <input className="form-control" type="text" name="password" id="password"  
                    onChange={this.handleChange} value={form.password}/>
                  </div>
                </ModalBody>

                <ModalFooter>               
                    <button className="btn btn-success" onClick={()=> this.peticionPost()} method="POST">
                    Registrar
                  </button>: <button className="btn btn-primary" onClick={() =>this.modalRegistrar()} >
                    Cancelar
                  </button>
                </ModalFooter>  
          </Modal>
      </div>
    )
  }
}

export default InicioSesion;