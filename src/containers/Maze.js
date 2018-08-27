import React, { Component } from 'react';
import Character from './Character';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../actions/index";

import './Maze.css';


class Maze extends Component {
    constructor(props) {
        super(props);
        this.props.resetMaze(this.props.stage_id);        
        this.state = {

        }
    }
}
function mapStateToProps(state) {
    return {
        character: state.characterReducer,
        stage_id: state.stageId,
        running: state.running,
    };
}
 
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result shoudl be passed
    // to all of our reducers
    return bindActionCreators({ 
            updateMove: actions.updateMove,
            updateAll: actions.updateAll,
            toggleRunning: actions.toggleRunning,
            resetStage: actions.resetStage,
        }, dispatch);
  }
export default connect(mapStateToProps, mapDispatchToProps)(Maze);