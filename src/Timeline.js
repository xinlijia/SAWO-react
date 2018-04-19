import React, { Component } from 'react';
import Move from './Move';
import Character from './Character';
import './Timeline.css';
import { collideRect } from './util/functions.js'


class Timeline extends Component {
    needUpdate = false;
    constructor(props) {
        super(props);
        let move_list = [];

        for(var i=0; i<this.props.content.length; i++){
            var type = this.props.content[i];
            move_list.push(
            {'id': i, 'type': type, 'container': 'move', 'time': null, 'dragging': false,
            'top': 20, 'left': i * 40 + 30, 'oritop': 20, 'orileft': i * 40 + 30,
            'offtop': 0, 'offleft': 0,
            }
            )
        }
        
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
            let new_move_list = this.state.move_list.map((item, index) =>
                item
            );
            new_move_list[id].top = top - new_move_list[id].offtop;
            new_move_list[id].left = left - new_move_list[id].offleft;
            this.setState({
                move_list: new_move_list,
            }); 
        }
        else if (act === 'drop'){
            let new_move_list = this.state.move_list.map((item, index) =>
                item
            );
            var move = new_move_list[id]
            const rect = {top: move.top, left: move.left, width: 30, height: 30}

            if(move.container === 'move'){
                var time = left - new_move_list[id].offleft
                if(collideRect(rect, this.state.timeline_rect) && !(time in this.state.timeline_dic)){
                    move.left = time;
                    move.top = this.state.timeline_rect.top - 10;
                }
                else{
                    move.left = move.orileft;
                    move.top = move.oritop;
                }
            }
            else{
                time = left - new_move_list[id].offleft

                if(collideRect(rect, this.state.move_rect)){
                    // TODO
                    move.left = left;
                    move.top = this.state.move_rect.top;
                }
                else if (collideRect(rect, this.state.timeline_rect) && !(time in this.state.timeline_dic)){
                    let new_timeline_dic = Object.assign({}, this.state.timeline_dic);
                    delete this.state.timeline_dic[move.time];
                    new_timeline_dic[time] = id;
                    this.setState({
                        timeline_dic: new_timeline_dic,
                    })
                    move.time = time;
                    move.top = this.state.timeline_rect.top - 10;
                }
                else{
                    move.left = move.orileft;
                    move.top = move.oritop;
                }
            }
            move.dragging = false;  

            this.setState({
                move_list: new_move_list,
            }); 
        }
   
    }

    render() {
        let moves = this.state.move_list.map((item, index) =>
            <Move
                key={item.id}
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
                <Character
                    top={100}
                    left={100}
                 />
            </div>
        );
    }
}

export default Timeline;
