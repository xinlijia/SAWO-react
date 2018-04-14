import React, { Component } from 'react';
import 'react-tabs/style/react-tabs.css';
import Main from './main.js'
import Icon from './Icon.js'
import './App.css';

// Random function to assign identities
function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

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
    // Change the player number if the game does not start
    setPlayerNumber(player_num){
        if (this.state.is_started === false){
            this.setState({player_num: player_num});

        }
    }
    // Set the number of players. Cannot be changed after set
    numberSetDone(){
        if(this.state.is_started === false){
            this.setState({is_started: true});
        }
        this.generateIdentities(this.state.player_num);
        this.setState({is_started_message: 'Player number set!'})
    }
    // Randomly assign identities according to the number of player
    // Called when number of player is set
    generateIdentities(player_num){
        var random_list;
        var identities;
        var new_dic;  
        var i;    
        if(player_num === 5){
            random_list = shuffleArray([1, 2, 3, 4, 5]);
            identities = ['Merlin', 'Percival', 'Loyal Servant', 'Morgana', 'Assassin'];
            new_dic = {}
            for (i = 0; i < 5; i++){
                new_dic[random_list[i]] = identities[i];
            }
            this.setState({identity_dic: new_dic})            
        }
        else if(player_num === 6){
            random_list = shuffleArray([1, 2, 3, 4, 5, 6]);
            identities = ['Merlin', 'Percival', 'Loyal Servant', 'Loyal Servant', 'Morgana', 'Assassin'];
            new_dic = {}
            for (i = 0; i < 6; i++){
                new_dic[random_list[i]] = identities[i];
            }
            this.setState({identity_dic: new_dic})            
        }
        else if(player_num === 7){
            random_list = shuffleArray([1, 2, 3, 4, 5, 6, 7]);
            identities = ['Merlin', 'Percival', 'Loyal Servant', 'Loyal Servant', 'Morgana', 'Assassin', 'Oberon'];
            new_dic = {}
            for (i = 0; i < 7; i++){
                new_dic[random_list[i]] = identities[i];
            }
            this.setState({identity_dic: new_dic})            
        }
        else if(player_num === 8){
            random_list = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8]);
            identities = ['Merlin', 'Percival', 'Loyal Servant', 'Loyal Servant', 'Loyal Servant', 'Morgana', 'Assassin', 'Minion of Mordred'];
            new_dic = {}
            for (i = 0; i < 8; i++){
                new_dic[random_list[i]] = identities[i];
            }
            this.setState({identity_dic: new_dic})            
        }
        else if(player_num === 9){
            random_list = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            identities = ['Merlin', 'Percival', 'Loyal Servant', 'Loyal Servant', 'Loyal Servant', 'Loyal Servant', 'Morgana', 'Assassin', 'Mordred'];
            new_dic = {}
            for (i = 0; i < 9; i++){
                new_dic[random_list[i]] = identities[i];
            }
            this.setState({identity_dic: new_dic})            
        }
        else if(player_num === 10){
            random_list = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            identities = ['Merlin', 'Percival', 'Loyal Servant', 'Loyal Servant', 'Loyal Servant',
             'Loyal Servant', 'Morgana', 'Assassin', 'Mordred', 'Oberon'];
            new_dic = {}
            for (i = 0; i < 10; i++){
                new_dic[random_list[i]] = identities[i];
            }
            this.setState({identity_dic: new_dic})            
        }
        else{
            console.log('Player number error!')
        }
    }
    // Toggle the status of identity
    // Not work when game not start
    checkToggle(){
        var identity_funcs = {'Merlin': 'knows the Evils, must remain hidden', 'Percival': 'knows Merlin', 'Loyal Servant': 'are the Goods',
         'Morgana': 'appears as Merlin', 'Mordred': 'are unknown to Merlin', 'Assassin': 'need to kill Merlin', 'Oberon': 'are unknown to Evil',
        'Minion of Mordred': 'are the Evils'}
        if(this.state.showing_identity == null && this.state.check_num <= this.state.player_num && this.state.is_started){
            var id = this.state.identity_dic[this.state.check_num]
            this.setState({showing_identity: 'You are ' + id + '. You ' + identity_funcs[id] + '.'})
        }
        else{
            this.setState({showing_identity: null})
        }
        
    }
    // Go to see next identity
    // Not work when game not start
    checkNext(){
        if(this.state.showing_identity != null){
        
            this.setState({showing_identity: null})        
            if(this.state.check_num  <= this.state.player_num){
                this.setState({check_num: this.state.check_num + 1})            
            }
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
