import React, { Component } from 'react';

import Stage from './Stage.js';
import mazeData from './resource/maze/maze.json';


class Main extends Component {	
	constructor(props){
		super(props);
		this.state={
			maze_id: props.maze_id,
            character_pos: mazeData[props.maze_id].character_pos,
			character_dir: mazeData[props.maze_id].character_dir,
            tool: mazeData[props.maze_id].tool,
			move: mazeData[props.maze_id].move,
			timeline: {},
            mech: mazeData[props.maze_id].mech,
			brick: mazeData[props.maze_id].brick,
			running: false,
		};
	}

	updateTimeline = (timeline) => {
		this.setState({
			timeline: timeline,
		});
	}

  	render(){
    	return (
			<div>
				<Stage 
					content={this.state.move} 
					pos={{top: 0, left: 0}}
					updateTimeline={this.updateTimeline}
					maze={mazeData[this.props.maze_id]}
				/>


			</div>				  
    	);
	}
}

export default Main;
