import React, { Component } from 'react';
//import './round.css';



class Round extends Component {
	voter_num_dic = {5: {1:2, 2:3, 3:2, 4:3, 5:3},
					   6: {1:2, 2:3, 3:4, 4:3, 5:4},
					   7: {1:2, 2:3, 3:3, 4:4, 5:4},
					   8: {1:3, 2:4, 3:4, 4:5, 5:5},					   
					   9: {1:3, 2:4, 3:4, 4:5, 5:5},
					   10: {1:3, 2:4, 3:4, 4:5, 5:5}
					}	
	constructor(props){
		super(props);
		this.state={
			round_num: props.num,
			voter_num: this.voter_num_dic[props.player_num][props.num],
			player_num: props.player_num,
			confirm_message: null,
			vote_num: 1,
			vote_preview: null,
			vote_result: [],
			round_end: false
		}
	}
	// Decide to vote succeed
	succeed(){
		if(!this.state.round_end){
			this.setState({vote_preview: 'Succeed!'})
		}
	}
	// Decide to vote fail
	fail(){
		if(!this.state.round_end){
			this.setState({vote_preview: 'Fail!'})
		}
	}
	// Commit vote
	vote(){
		if(this.state.vote_preview != null && !this.state.round_end){
			// Finish voting, ready to check result
			if(this.state.vote_num == this.voter_num_dic[this.state.player_num][this.state.round_num]){
				const new_vote_result = this.state.vote_result;
				new_vote_result.push(this.state.vote_preview);
				this.setState({vote_result: new_vote_result});
				this.setState({vote_preview: null})				
				this.setState({round_end: true})
			}
			else{
				this.setState({vote_num: this.state.vote_num + 1});
				const new_vote_result = this.state.vote_result;
				new_vote_result.push(this.state.vote_preview);
				this.setState({vote_result: new_vote_result});
				this.setState({vote_preview: null})
			}
		}
	}
	checkResult(){
		if(this.state.round_end){
			var fail_count = 0
			for(var i = 0; i < this.state.vote_result.length; i++){
				if(this.state.vote_result[i] == 'Fail!'){
					fail_count = fail_count + 1;
				}
			}
			if(this.state.round_num == 4 && this.state.player_num >= 7){
				if(fail_count >= 2){
					this.setState({vote_preview: 'Final Result: Fail!'})
				}
				else{
					this.setState({vote_preview: 'Final Result: Succeed!'})
				}
			}
			else if(fail_count >= 1){
				this.setState({vote_preview: 'Final Result: Fail!'})
			}
			
			else{
				this.setState({vote_preview: 'Final Result: Succeed!'})
				
			}	
		}
		
	}

  	render() {
    	return (
      		<div> Voter number: {this.state.voter_num}
				<div>
					<button onClick={() => {this.succeed()}}>Succeed!</button>
					<button onClick={() => {this.fail()}}>Fail!</button>
				</div>
				<button onClick={() => {this.vote()}}>Confirm!</button>
				<div> You are # {this.state.vote_num} voter. Choose your vote </div>
				<button onClick={() => {this.checkResult()}}>Check Result</button>
				<div> {this.state.vote_preview} </div>
      		</div>
    	);
	}
}

export default Round;
