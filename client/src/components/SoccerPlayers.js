import React, { Component } from 'react';
import axios from 'axios'

class SoccerPlayers extends Component {
    constructor() {
        super()
        this.state = {
            players: []
        }
    }

    componentDidMount() {
       axios.get('http://localhost:5004/api/players').then(res => {
           this.setState({players: res.data})
        //    console.log(this.state.players)
       }) 
    }

    
    render() {
        return (
            <div>
              {this.state.players.map(player => {
                return  <div className='holder' key={player.id}>
                            <h1>name: {player.name}</h1>
                            <h3>Country: {player.country}</h3>
                            <h4>Searches: {player.searches}</h4>
                        </div>
              })}  
            </div>
        );
    }
}

export default SoccerPlayers;