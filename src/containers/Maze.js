import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../actions/index";
import mazeData from "../resource/maze/maze.json"

import './Maze.css';


class Maze extends Component {
    constructor(props) {
        super(props);

        console.log(mazeData);
    }
    render() {
        let walls = mazeData[this.props.stage_id]["brick"].map((item, index) =>
            <div
                className={"wall"}
                key={index}
                style={ 
                    {
                        top: item.top,
                        left: item.left,
                        width: item.width,
                        height: item.height,
                    }
                }
                
            />
        );
        return (
            <div>{walls}</div>
        );
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
            updateAll: actions.updateAll,
            toggleRunning: actions.toggleRunning,
            resetStage: actions.resetStage,
        }, dispatch);
  }
export default connect(mapStateToProps, mapDispatchToProps)(Maze);