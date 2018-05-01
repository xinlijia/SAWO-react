import React, { Component } from 'react';
import Move from './Move';
import Character from './Character';
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

    
    



    // move to reducers

    // updateMove = (id, top, left, act) => {
    //     // manage collide here
    //     if (act === 'pick'){
    //         let new_move_list = this.state.move_list.map((item, index) =>
    //             item
    //         );
    //         new_move_list[id].offtop = top;
    //         new_move_list[id].offleft = left;
    //         new_move_list[id].dragging = true;
    //         this.setState({
    //             move_list: new_move_list,
    //         }); 


    //     }
    //     else if (act === 'drag'){
    //         let new_move_list = this.state.move_list.map((item, index) =>
    //             item
    //         );
    //         new_move_list[id].top = top - new_move_list[id].offtop;
    //         new_move_list[id].left = left - new_move_list[id].offleft;
    //         this.setState({
    //             move_list: new_move_list,
    //         }); 
    //     }
    //     else if (act === 'drop'){
    //         let new_move_list = this.state.move_list.map((item, index) =>
    //             item
    //         );
    //         var move = new_move_list[id]
    //         const rect = {top: move.top, left: move.left, width: 30, height: 30}

    //         if(move.container === 'move'){
    //             var time = left - new_move_list[id].offleft
    //             if(collideRect(rect, this.state.timeline_rect) && !(time in this.state.timeline_dic)){
    //                 move.left = time;
    //                 move.top = this.state.timeline_rect.top - 10;
    //                 move.time = time;
    //                 move.container = 'timeline';
    //                 let new_timeline_dic = Object.assign({}, this.state.timeline_dic);
    //                 new_timeline_dic[time] = id;
    //                 this.setState({
    //                     timeline_dic: new_timeline_dic,
    //                 });
    //                 this.props.updateTimeline(new_timeline_dic);
    //             }
    //             else{
    //                 move.left = move.orileft;
    //                 move.top = move.oritop;
    //             }
    //         }
    //         else{
    //             time = left - new_move_list[id].offleft

    //             if(collideRect(rect, this.state.move_rect)){
    //                 // TODO
    //                 move.left = time;
    //                 move.top = this.state.move_rect.top;
    //                 move.container = 'move';
    //                 let new_timeline_dic = Object.assign({}, this.state.timeline_dic);
    //                 delete new_timeline_dic[move.time];
    //                 this.setState({
    //                     timeline_dic: new_timeline_dic,
    //                 });
    //                 this.props.updateTimeline(new_timeline_dic);
    //             }
    //             else if (collideRect(rect, this.state.timeline_rect) && !(time in this.state.timeline_dic)){
    //                 let new_timeline_dic = Object.assign({}, this.state.timeline_dic);
    //                 delete new_timeline_dic[move.time];
    //                 new_timeline_dic[time] = id;
    //                 this.setState({
    //                     timeline_dic: new_timeline_dic,
    //                 });
    //                 this.props.updateTimeline(new_timeline_dic);

    //                 move.time = time;
    //                 move.top = this.state.timeline_rect.top - 10;
    //             }
    //             else{
    //                 move.left = move.orileft;
    //                 move.top = move.oritop;
    //             }
    //         }
    //         move.dragging = false;  

    //         this.setState({
    //             move_list: new_move_list,
    //         }); 
    //     }

    // }

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
                <div className="maze"
                />
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
  