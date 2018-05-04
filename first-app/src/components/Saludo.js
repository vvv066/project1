import React, { Component } from 'react'
class Saludo extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        return ( 
            <div >
            <h3> { this.props.text } </h3>   
            </div >
        )
    }


}
export default Saludo