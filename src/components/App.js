import React, { Component } from 'react';
import Main from '../containers/Main'
import Icon from '../containers/Icon.js'
import './App.css';

// Main App Struct
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            player_num: 5,
            is_started: false,
            identity_dic: {1:'Merlin', 2:'Percival', 3:'Loyal Servant', 4:'Morgana', 5:'Assassin'},
            check_num: 1,
            showing_identity: null,
            is_started_message: 'Player number not set!'
        }
    }
  	render() {

    	return (

      	<div className="App">
        	<Icon type={"pause_icon"}/>
            <Main maze_id={0}/>

      	</div>
        
    	);
	}
}

export default App;
