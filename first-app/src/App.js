import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo'
import Despedida from './components/Despedida'
import Navbar from './components/Navbar'
import Card from './components/Card'


class App extends Component {
    constructor() {
        super()
        this.state = {
            saludo: '¡hola desde DevF!',
            despedida: 'Adios DevF',
            cards: [
                {
                    nombre:"Fernando Reyes",
                    bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                },
                {
                    nombre:"Daniel Reyes",
                    bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                },
                {
                    nombre:"Daniela Estrada",
                    bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                }
            ]
        }
    }

    render() {
        const cards = this.state.cards.map((element,index,array)=>{
            return <Card nombre={element.nombre} bio={element.bio}/> 
        })
        return (
            <div className="App" >
                <Navbar />
            <div className="row">
                {cards}                
            </div>
            </div >

            );
        }
    }
    
export default App;