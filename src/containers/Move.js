import React, { Component } from 'react';
import './Move.css';
import { collideRect } from './util/functions.js'

class Move extends Component {
    constructor(props) {
        super(props);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
    }

    componentDidUpdate(props, state) {
        if (this.props.dragging && !props.dragging) {
            document.addEventListener('mousemove', this.onMouseMove);
            document.addEventListener('mouseup', this.onMouseUp);
        } else if (!this.props.dragging && props.dragging) {
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('mouseup', this.onMouseUp);
        }
    }

    validTarget(rect){
        return collideRect(rect, this.state.rect);
    }

    onMouseUp(e) {
        const new_top = e.pageY;
        const new_left = e.pageX;
        this.props.updateMove(this.props.id, new_top, new_left, 'drop')

        e.stopPropagation();
        e.preventDefault();
    }

    onMouseMove(e) {

        if (!this.props.dragging) return;
        const new_top = e.pageY;
        const new_left = e.pageX;
        this.props.updateMove(this.props.id, new_top, new_left, 'drag')
        e.stopPropagation();
        e.preventDefault();
    }

    onMouseDown(e) {

        // only left mouse button
        if (e.button !== 0) return;
        const offset_top = e.pageY - this.props.top;
        const offset_left = e.pageX - this.props.left;

        this.props.updateMove(this.props.id, offset_top, offset_left, 'pick')

        e.stopPropagation();
        e.preventDefault();

    }


    render() {

        return (
            <div onMouseDown={(e) => this.onMouseDown(e)}>
                <div 
                className="move_icon" 
                id={this.props.type} 
                style={{top: this.props.top, left:this.props.left}}/ >
            </div>

        );
    }
}

export default Move;
