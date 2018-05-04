import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo'
import Despedida from './components/Despedida'
import Navbar from './components/Navbar'
import Card from './components/Card'
import axios from 'axios'

class App extends Component {
    constructor() {
        super()
        this.state = {
            saludo: '¡hola desde DevF!',
            despedida: 'Adios DevF',
            cards: []
        }
    }

    componentWillMount(){
        
        axios.get('http://pokeapi.co/api/v2/pokemon/1')
        .then(response =>{
            console.log(response)
                this.setState({
                cards:[
                    {
                        nombre: response.data.name,
                        bio: response.data.weight,
                        img: response.data.sprites.front_default
                    }
                ]
            })
        })
        .catch(err =>{
            console.log(err)
        })

    }

    updateCard(){
        if(this.state.cards.length>0){
            const cards = this.state.cards.map((element,index,array)=>{
                return <Card nombre={element.nombre} bio={element.bio} img={element.img}/> 
            })
            return cards
        }else{
            return <p>Cargando...</p>
        }
    }

    render() {
        
        return (
            <div className="App" >
                <Navbar />
            <div className="row">
                {this.updateCard()}                
            </div>
            </div >

            );
        }
    }
    
export default App;