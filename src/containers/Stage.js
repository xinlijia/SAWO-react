import React, { Component } from 'react';
import Move from './Move';
import Character from './Character';
import Maze from './Maze';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../actions/index";

import './Stage.css';
// import { collideRect } from '../util/functions.js'

// TO DO 
class Stage extends Component {
    constructor(props) {
        super(props);
        this.props.resetStage(this.props.stage_id);        
        this.state = {
            move_rect:{
                top: 20,
                left: 25,
                width: 300,
                height: 30,
            },
            timeline_rect:{
                top: 100,
                left: 50,
                width: 250,
                height: 10,
            },
        };

    }
    // manage frame
    frame = () => {
        if(this.props.running){
            this.props.updateAll(
                    this.props.stage_id,
                    1.0/50, 
                    this.props.running, 
                    this.props.timeline, 
                    this.props.move_list, 
                    this.props.timeline_pointer,
                );
        }
    }
    componentDidMount(){
        this.interval = setInterval(this.frame, 20);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }


    render() {
        if (this.props.stage_id === -1){
            return (
                <div> Title Scene </div>
            );
        }
        let moves = this.props.move_list.map((item, index) =>
            <Move
                key={item.id}
                id={item.id}
                type={item.type}
                top={item.top}
                left={item.left}
                timeline_dic={this.props.timeline}
                move_list={this.props.move_list}
                dragging={item.dragging}
                updateMove={this.props.updateMove}
            />
        );


        return (
            <div className="stage">
                <div className="move_bar" 
                    style={this.state.move_rect}
                    />
                <div className="timeline" 
                    style={this.state.timeline_rect}
                    />
                <div className="timeline_pt"
                    style={{top: 92, left: this.props.timeline_pointer - 8}}
                />
                <div className="maze">                    
                    <Maze />
                </div>

                {moves}
                <Character
                    character={this.props.character}
                />

                <button className={'start_pause_' + this.props.running}         
                        onClick={() => this.props.toggleRunning()}/>
                <button className={'reset'}         
                        onClick={() => this.props.resetStage(this.props.stage_id)}/>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        character: state.characterReducer,
        move_list: state.moveList,
        timeline: state.timeline,
        timeline_pointer: state.timelinePointer,
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
export default connect(mapStateToProps, mapDispatchToProps)(Stage);
  