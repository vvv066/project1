import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo'
import Despedida from './components/Despedida'

class App extends Component {
    constructor() {
        super()
        this.state = {
            saludo: '¡hola desde DevF!',
            despedida: 'Adios DevF'
        }

    }

    render() {
        return ( <
            div className = "App" >
            <
            header className = "App-header" >
            <
            img src = { logo }
            className = "App-logo"
            alt = "logo" / >
            <
            h1 className = "App-title" > Welcome to React < /h1> < /
            header > <
            p className = "App-intro" >
            To get started, edit < code > src / App.js < /code> and save to reload. < /
            p >
            <
            Saludo text = { this.state.saludo }
            / >  <
            Despedida text = { this.state.despedida }
            /> < /
            div >
        );
    }
}

export default App;