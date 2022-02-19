import React,{Component} from 'react';
import './App.css';
import UsuarioEntrada from './componentes/UsuarioEntrada';
import UsuarioSaida from './componentes/UsuarioSaida';



class App extends Component{
  render(){
    return (
      <div>
        <UsuarioEntrada nome="Dannilo" />
        <UsuarioSaida />
      </div>
    )

    }}
  
    export default App;
