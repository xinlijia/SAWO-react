import React, { Component } from 'react';
import './Character.css';
import { collideRect } from './util/functions.js'

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dir: 'l',
            vel: 0,
            still: 'moving',
            top: this.props.top,
            left: this.props.left,
            running: false,
            frame: 0,
        };
        this.tick = this.tick.bind(this);
    }

    validTarget(rect){
        return collideRect(rect, this.state.rect);
    }

    tick(){
        // if(this.state.running){
        //     console.log('123');

        // }
        this.setState({
            frame: this.state.frame + 1,
        });
    }
    componentDidMount(){
        this.interval = setInterval(this.tick, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    
    moveUp(){
        this.setState({
            dir: 'u',
        });
    }

    moveDown(){
        this.setState({
            dir: 'd',
        });
    }

    moveLeft(){
        this.setState({
            dir: 'l',
        });
    }

    moveRight(){
        this.setState({
            dir: 'r',
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
    updateMove(maze, dt){
        if(this.state.dir === 'l'){
            this.move(maze, -this.state.speed * dt, 0);
        }
        if(this.state.dir === 'r'){
            this.move(maze, this.state.speed * dt, 0);

        }
        if(this.state.dir === 'u'){
            this.move(maze, 0, -this.state.speed * dt);

        }
        if(this.state.dir === 'd'){
            this.move(maze, 0, this.state.speed * dt);
        }
    }
    moveSingleAxis(dx, dy, maze){

    }
    render() {

        return (
            <div>
                {this.state.frame}
                <div 
                className={'character ' + this.state.still + '_' + this.state.dir}
                style={{top: this.state.top, left:this.state.left}}
                />
            </div>
        );
    }
}

export default Character;
