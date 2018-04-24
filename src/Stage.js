import React, { Component } from 'react';
import Move from './Move';
import Character from './Character';
import './Stage.css';
import { collideRect } from './util/functions.js'


class Stage extends Component {
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

            timeline_time: 50,
            running: false,
            maze: this.props.maze,
        };

    }
    frame = () => {
        if(this.state.running){
            this.updateAll(this.state.maze, 1.0/50);
        }
    }
    componentDidMount(){
        this.interval = setInterval(this.frame, 20);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    updateAll(maze, dt){
        this.updateTimelinePointer(dt)
        this.character.updateCharacter(maze, dt)
    }

    updateTimelinePointer(dt){
        if(this.state.running){
            let time_now = this.state.timeline_time;
            // manage movement here
            if(time_now in this.state.timeline_dic){
                let move = this.state.move_list[this.state.timeline_dic[time_now]];
                if(move.type === 'move_up'){
                    this.character.changeDir('u');
                }
                else if(move.type === 'move_down'){
                    this.character.changeDir('d');
                }
            }


            if(time_now + dt * 50 < 300){
                this.setState({
                    timeline_time: this.state.timeline_time + dt * 50,
                });
            }
            

        }
    }

    
    





    updateMove = (id, top, left, act) => {
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
                    move.time = time;
                    move.container = 'timeline';
                    let new_timeline_dic = Object.assign({}, this.state.timeline_dic);
                    new_timeline_dic[time] = id;
                    this.setState({
                        timeline_dic: new_timeline_dic,
                    });
                    this.props.updateTimeline(new_timeline_dic);
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
                    move.left = time;
                    move.top = this.state.move_rect.top;
                    move.container = 'move';
                    let new_timeline_dic = Object.assign({}, this.state.timeline_dic);
                    delete new_timeline_dic[move.time];
                    this.setState({
                        timeline_dic: new_timeline_dic,
                    });
                    this.props.updateTimeline(new_timeline_dic);
                }
                else if (collideRect(rect, this.state.timeline_rect) && !(time in this.state.timeline_dic)){
                    let new_timeline_dic = Object.assign({}, this.state.timeline_dic);
                    delete new_timeline_dic[move.time];
                    new_timeline_dic[time] = id;
                    this.setState({
                        timeline_dic: new_timeline_dic,
                    });
                    this.props.updateTimeline(new_timeline_dic);

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
	toggleRunning = () => {
		let running = !this.state.running;
		this.setState({
			running: running,
		})
    }
    resetStage = () => {
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
        this.setState({
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
            timeline_time: 50,
            running: false,
        });
        this.character.resetCharacter();
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


        return (
            <div className="stage">
                <div className="move_bar" 
                    style={this.state.move_rect}
                    />
                <div className="timeline" 
                    style={this.state.timeline_rect}
                    />
                <div className="timeline_pt"
                    style={{top: 92, left: this.state.timeline_time - 8}}
                />
                <div className="maze"
                />
                {moves}
                <Character
                    onRef={ref => (this.character = ref)}
                    maze={this.state.maze}
                    running={this.state.running}
                 />
                <button className={'start_pause_' + this.state.running}         
                        onClick={this.toggleRunning}/>
                <button className={'reset'}         
                        onClick={this.resetStage}/>
            </div>
        );
    }
}

export default Stage;
