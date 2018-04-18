import React, { Component } from 'react';
import Move from './Move';
import './Timeline.css';


class Timeline extends Component {
    needUpdate = false;
    constructor(props) {
        super(props);
        let move_list = [];
        console.log(this.props.content);

        for(var i=0; i<this.props.content.length; i++){
            var type = this.props.content[i];
            move_list.push(
            {'id': i, 'type': type, 'container': 'move', 'time': null, 'dragging': false,
            'top': 20, 'left': i * 40 + 30, 'oritop': 20, 'orileft': i * 40 + 30,
            'offtop': 0, 'offleft': 0,
            }
            )
        }
        
        console.log(move_list);
        this.state = {
            pos: this.props.pos,
            move_list: move_list,
            timeline_dic: {},
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
            running: false,
        };
        this.updateMove = this.updateMove.bind(this);
    }

    updateTimeline(id, new_time){
        if (new_time in this.state.timeline_dic){
            return false;
        }
        let new_move_list = Object.assign({}, this.move_list);
        var original_time = new_move_list[id].time;
        new_move_list[id].time = new_time
        let new_timeline_dic = Object.assign({}, this.state.timeline_dic);
        delete new_timeline_dic[original_time];
        new_timeline_dic[new_time] = id;
        this.setState({
            timeline_dic: new_timeline_dic,
            move_list: new_move_list,
        });

        return true;    
    }

    moveToTimeline(time, id){
        if (time in this.state.timeline_dic){
            return false
        }
        let new_move_list = Object.assign({}, this.state.move_list);
        new_move_list[id].time = time;
        new_move_list[id].container = 'timeline';

        let new_timeline_dic = Object.assign({}, this.state.timeline_dic);
        new_timeline_dic[time] = id;
        this.setState({
            move_list: new_move_list,
            timeline_dic: new_timeline_dic,
        });
        return true
    }
    timelineToMove(time, id){
        if (!(time in this.state.timeline_dic)){
            return false;
        }
        let new_timeline_dic = Object.assign({}, this.state.timeline_dic);
        delete new_timeline_dic[time];

        let new_move_list = Object.assign({}, this.state.move_list);
        new_move_list[id].time = null;
        new_move_list[id].container = 'move';

        this.setState({
            move_list: new_move_list,
            timeline_dic: new_timeline_dic,
        });

        return true;
    }
    updateMove(id, top, left, act){
        // manage collide here
        if (act === 'pick'){
            let new_move_list = this.state.move_list.map((item, index) =>
                item
            );
            new_move_list[id].offtop = top;
            new_move_list[id].offleft = left;
            new_move_list[id].dragging = true;
            this.setState({
                move_list: new_move_list,
            }); 


        }
        else if (act === 'drag'){
            console.log(this.state.move_list, id);
            let new_move_list = this.state.move_list.map((item, index) =>
                item
            );
            new_move_list[id].top = top - new_move_list[id].offtop;
            new_move_list[id].left = left - new_move_list[id].offleft;
            // console.log(new_move_list);
            this.setState({
                move_list: new_move_list,
            }); 
        }
        else if (act === 'drop'){
            let new_move_list = this.state.move_list.map((item, index) =>
                item
            );
            new_move_list[id].top = top - new_move_list[id].offtop;
            new_move_list[id].left = left - new_move_list[id].offleft;
            new_move_list[id].dragging = false;
            // console.log(new_move_list);
            this.setState({
                move_list: new_move_list,
            }); 
        }
   
    }

    render() {
        console.log('ass',this.state.move_list);
        let moves = this.state.move_list.map((item, index) =>
            <Move
                id={item.id}
                type={item.type}
                top={item.top}
                left={item.left}
                dragging={item.dragging}
                updateMove={this.updateMove}
            />
        );
        // for (var i=0; i<this.state.move_list.length; i++){
        //     var item = this.state.move_list[i];
        //     moves.push(            
        //         <Move
        //             id={item.id}
        //             type={item.type}
        //             top={item.top}
        //             left={item.left}
        //             dragging={item.dragging}
        //             updateMove={this.updateMove}
        //         />
        // )
        // };

        return (

            <div className='timeline'>
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
