import React, {Component} from 'react'


export default class UsuarioEntrada extends Component {


    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(state){

        super(state)
        this.setTipo = this.setTipo.bind(this)
        this.setNome = this.setNome.bind(this)
    }
    setTipo(e){

        this.setState({ tipo: e.target.value})

    }
    setNome(e){

        this.setState({ nome: e.target.value})

    }

    render() {
const {tipo, nome} = this.state
return(
    <div>
        <form>Digite uma frase!</form>
        <input tpe="text" placeholder='Tipo' value={tipo} onChange={e => this.setTipo(e)} />
        
        <form>Digite um nome!</form>
        <input tpe="text" placeholder='Nome' value={nome} onChange={e => this.setNome(e)} />
       
        <hr/>
        <h1>{tipo} {nome}! </h1>
    </div>
)

    }

}

// export const UsuarioEntrada = props => <input>digite seu nome{props.nome}</input>

// export const UsuarioSaida = props => <input>digite alguma coisa{props.algumacoisa}</input>