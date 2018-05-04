import React, { Component } from 'react'

class Card extends Component {
    constructor(props) {
        super(props)

    }
    render(){
        return(
            <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src= {this.props.img} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">Nombre: {this.props.nombre}</h5>
                <p className="card-text">Peso: {this.props.bio}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        )
    }

}

export default Card