import logo from './logo.svg';
import './App.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import Marcadores from './Componentes/Marcadores'
import { Component } from 'react';
import iconLocation from './Componentes/iconLocation' 

class App extends Component{

  state ={
        marcadores:[]
      };
  
    componentDidMount() {
      fetch('http://localhost:3500/get_data',{ 
      method: 'GET',
      headers: {
        Accept: 'application/json',
                'Content-Type':'application/json',
                'Authorization': '3ywg&hsnxu43o9+iaz&sdtr'
      }})// Aqui va la ruta
       .then(res => res.json())
        .then((data) => {
          this.setState({ marcadores: data })
       })
        .catch(console.log)
      };
  
  
  render(){
    return(
      <MapContainer center={[4.08892, -76.20143]} zoom={13} scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={[4.08892, -76.20143]} icon={iconLocation}>
        <Popup>
                holi. <br />
        </Popup>
        </Marker>
        <Marcadores marcadores={this.state.marcadores} />
      
      </MapContainer>

    );
  }
}

export default App;
