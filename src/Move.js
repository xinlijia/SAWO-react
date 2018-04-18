import React, { Component } from 'react';
import './Move.css';
import { collideRect } from './util/functions.js'

class Move extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
        };
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
        console.log('up');
        const new_top = e.pageY;
        const new_left = e.pageX;
        this.props.updateMove(this.props.id, new_top, new_left, 'drop')

        e.stopPropagation();
        e.preventDefault();
    }

    onMouseMove(e) {
        console.log('move');

        if (!this.props.dragging) return;
        const new_top = e.pageY;
        const new_left = e.pageX;
        this.props.updateMove(this.props.id, new_top, new_left, 'drag')
        e.stopPropagation();
        e.preventDefault();
    }

    onMouseDown(e) {
        console.log('down');

        // only left mouse button
        if (e.button !== 0) return;
        const offset_top = e.pageY - this.props.top;
        const offset_left = e.pageX - this.props.left;

        this.props.updateMove(this.props.id, offset_top, offset_left, 'pick')

        e.stopPropagation();
        e.preventDefault();

    }


    render() {
        console.log(this.props.top);
        console.log(this.props.left);

        return (
            <div onMouseDown={(e) => this.onMouseDown(e)}>
                <div 
                className="sprite" 
                id={this.state.type} 
                style={{top: this.props.top, left:this.props.left}}/ >
            </div>

        );
    }
}

export default Move;
