import React, { Component } from 'react';
import './Tool.css';

class Tool extends Component {
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

    onMouseUp(e) {
        const new_top = e.pageY;
        const new_left = e.pageX;
        this.props.updateTool(this.props.id, new_top, new_left, 'drop',  this.props.tool_list)

        e.stopPropagation();
        e.preventDefault();
    }

    onMouseMove(e) {

        if (!this.props.dragging) return;
        const new_top = e.pageY;
        const new_left = e.pageX;
        this.props.updateTool(this.props.id, new_top, new_left, 'drag', this.props.tool_list)
        e.stopPropagation();
        e.preventDefault();
    }

    onMouseDown(e) {

        // only left mouse button
        if (e.button !== 0) return;
        const offset_top = e.pageY - this.props.top;
        const offset_left = e.pageX - this.props.left;

        this.props.updateTool(this.props.id, offset_top, offset_left, 'pick', this.props.tool_list)

        e.stopPropagation();
        e.preventDefault();

    }


    render() {

        return (
            <div onMouseDown={(e) => this.onMouseDown(e)}>
                <div 
                className="tool_icon" 
                id={this.props.type} 
                style={{top: this.props.top, left:this.props.left}}/ >
            </div>

        );
    }
}

export default Tool;
