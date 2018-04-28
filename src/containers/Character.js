import React, { Component } from 'react';
import './Character.css';

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dir: 'd',
            still: 'still',
            // initial pos by maze data
            top: this.props.maze.character_pos.top + 200,
            left: this.props.maze.character_pos.left,
            speed: 100,
            maze: this.props.maze,
        };
    }

    // pass this to parent
    // so the parent will have access to it
    componentDidMount(){
        this.props.onRef(this);
    }
    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    changeDir(dir){
        if(this.props.running){
            this.setState({
                dir: dir,
                still: 'moving',
            });
        }
    }
    stop(){
        if(this.props.running){
            this.setState({
                still: 'still',
            });
        }
    }
    updateCharacter(maze, dt){
        const dir = this.state.dir;
        const speed = this.state.speed;
        if(this.props.running && this.state.still === 'moving'){
            if(dir === 'l'){
                this.move(maze, -speed * dt, 0);
            }
            if(dir === 'r'){
                this.move(maze, speed * dt, 0);
            }
            if(dir === 'u'){
                this.move(maze, 0, -speed * dt);
            }
            if(dir === 'd'){
                this.move(maze, 0, speed * dt);
            }
        }
    }
    resetCharacter(){
        this.setState({
            dir: 'd',
            still: 'still',
            top: this.props.maze.character_pos.top + 200,
            left: this.props.maze.character_pos.left,
            speed: 100,
            maze: this.props.maze,
        });
    }
    move(maze, dx, dy){

        if(dx !== 0){
            this.moveSingleAxis(dx, 0, maze);
        }
        if(dy !== 0){
            this.moveSingleAxis(0, dy, maze);
        }
    }
    moveSingleAxis(dx, dy, maze){
        this.setState({
            top: this.state.top + dy,
            left: this.state.left + dx,
        });
    }


    render() {
        return (
            <div>
                <div 
                className={'character ' + this.state.still + '_' + this.state.dir}
                style={{top: this.state.top, left: this.state.left}}
                />
            </div>
        );
    }
}

export default Character;
