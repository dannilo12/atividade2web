import React, {Component} from 'react'
export default class UsuarioSaida extends Component {

    render() {
        const {nome, frase} = this.state
            return(
                <div>
                    <center>
                        <hr></hr>
                         <h1>Este é o Componente Saída</h1>
                        <form>Digite uma Nome</form>
                        <input tpe="text" placeholder='Nome' value={nome} onChange={e => this.setNome(e)} />
                        
                        <form>Digite uma Frase!</form>
                        <input tpe="text" placeholder='Frase' value={frase} onChange={e => this.setFrase(e)} />
       
                        <hr/>
                        <h1>{nome} {frase} </h1>
    
                    </center>
                 </div>
                )
            }

    state = {
        nome: this.props.nome,
        frase: this.props.frase
    }
    constructor(state){
        super(state)
        this.setNome = this.setNome.bind(this)
        this.setFrase = this.setFrase.bind(this)
    }
    setNome(e){
        this.setState({ nome: e.target.value})
    }
    setFrase(e){
        this.setState({ frase: e.target.value})
    }
}