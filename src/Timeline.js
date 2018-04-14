import React, { Component } from 'react';
import Move from './Move';
import './Timeline.css';


class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pos: this.props.pos,
            // key: type, value: count
            move_count: this.props.content,
            // kye: time, value: type
            timeline_dic: {},
            move_rect:{
                top: this.props.pos.top,
                left: this.props.pos.left,
                width: 300,
                height: 30,
            },
            timeline_rect:{
                top: this.props.pos.top + 100,
                left: this.props.pos.left + 20,
                width: 250,
                height: 10,
            },
            running: false,
        };
        this.updateTimeline = this.updateTimeline.bind(this)
        this.timelineToMove = this.timelineToMove.bind(this)
        this.moveToTimeline = this.moveToTimeline.bind(this)

    }

    updateTimeline(original_time, new_time){
        if (new_time in this.state.timeline_dic){
            return false;
        }
        var type = this.state.timeline_dic[original_time];
        let new_timeline_dic = Object.assign({}, this.state.timeline_dic);
        delete new_timeline_dic[original_time];
        new_timeline_dic[new_time] = type;
        this.setState({
            timeline_dic: new_timeline_dic,
        });
        console.log(this.state.timeline_dic);

        return true;    
    }
    moveToTimeline(time, type){
        if (time in this.state.timeline_dic || this.state.move_count[type] <= 0){
            return false;
        }
        let new_move_count = Object.assign({}, this.state.move_count);
        new_move_count[type]--;
        let new_timeline_dic = Object.assign({}, this.state.timeline_dic);
        new_timeline_dic[time] = type;
        this.setState({
            move_count: new_move_count,
            timeline_dic: new_timeline_dic,
        });
        return true;
    }
    timelineToMove(time, type){
        if (!(time in this.state.timeline_dic)){
            return false;
        }
        let new_timeline_dic = Object.assign({}, this.state.timeline_dic);
        delete new_timeline_dic[time];

        let new_move_count = Object.assign({}, this.state.move_count);
        new_move_count[type]++;

        this.setState({
            move_count: new_move_count,
            timeline_dic: new_timeline_dic,
        });
        return true;
    }


    render() {
        var moves = [];
        var i = 0;
        for (var key in this.state.move_count){
            for (var j = 0; j < this.state.move_count[key]; j++){
                moves.push(
                <Move
                    type={key}
                    pos={ {
                        top: 0, 
                        left: 30 * i + 30,
                    } }
                    move_rect={this.state.move_rect}
                    timeline_rect={this.state.timeline_rect}
                    updateTimeline={this.updateTimeline}
                    moveToTimeline={this.moveToTimeline}
                    timelineToMove={this.timelineToMove}
                />
                );
                i++;
            }
        }
        for (key in this.state.timeline_dic){
            moves.push(
                <Move
                    type={this.state.timeline_dic[key]}
                    pos={ {
                        top: 100, 
                        left: key,
                    } }
                    move_rect={this.state.move_rect}
                    timeline_rect={this.state.timeline_rect}
                    updateTimeline={this.updateTimeline}
                    moveToTimeline={this.moveToTimeline}
                    timelineToMove={this.timelineToMove}
                />
                );
        }
        console.log(this.state.timeline_dic);
        console.log(this.state.move_count);

        return (
            <div>
            <div className="move_bar" 
                style={this.state.move_rect}
                />
            <div className="time_line" 
                style={this.state.timeline_rect}
                />
            {moves}
            </div>
        );
    }
}

export default Timeline;
