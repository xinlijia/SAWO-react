import React, { Component } from 'react';
import './Move.css';
import { collideRect } from './util/functions.js'

class Move extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rect: {
                top: this.props.pos.top,
                left: this.props.pos.left,
                width: 30,
                height: 30,
            },
            prev_time: null,
            container: "move",
            origin_pos: this.props.pos,
            dragging: false,
            offset: null,
            type: this.props.type,
        };
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
    }

    componentDidUpdate(props, state) {
        if (this.state.dragging && !state.dragging) {
            document.addEventListener('mousemove', this.onMouseMove);
            document.addEventListener('mouseup', this.onMouseUp);
        } else if (!this.state.dragging && state.dragging) {
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('mouseup', this.onMouseUp);
        }
    }

    validTarget(rect){
        return collideRect(rect, this.state.rect);
    }

    onMouseUp(e) {
        this.setState({
            dragging: false,
        })

        if(this.state.container === "move"){
            var time = e.pageX - this.state.offset.left;
            if (this.validTarget(this.props.timeline_rect)) {
                if(this.props.moveToTimeline(time, this.state.type)){
                    this.setState({
                        rect:{
                            top: this.props.timeline_rect.top - 10,
                            left: e.pageX - this.state.offset.left,
                            width: 30,
                            height: 30,
                        },
                        container: "timeline",
                        prev_time: time,
                        // origin_pos: {top: 90, left: time}
                    }
                    );
                }
            }
            else{
                this.setState({
                    rect:{
                        top: this.state.origin_pos.top,
                        left: this.state.origin_pos.left,
                        width: 30,
                        height: 30,
                    },
                })
            }
        }
        else{
            if (this.validTarget(this.props.move_rect)) {
                if(this.props.timelineToMove(this.state.prev_time, this.state.type)){
                    this.setState({
                        container: "move",
                        rect:{
                            top: this.props.move_rect.top,
                            left: e.pageX - this.state.offset.left,
                            width: 30,
                            height: 30,
                        },                       
                    }
                    );
                }
            }
            else if(this.validTarget(this.props.timeline_rect)){
                var new_time = e.pageX - this.state.offset.left;

                if(this.props.updateTimeline(this.state.prev_time, new_time)){
                    this.setState({
                        rect:{
                            top: this.props.timeline_rect.top - 10,
                            left: new_time,
                            width: 30,
                            height: 30,
                        },
                        // origin_pos: {top: 90, left: new_time},
                        prev_time: new_time,
                    }
                    );
                }

            }
            else{
                this.setState({
                    rect:{
                        top: this.state.origin_pos.top,
                        left: this.state.origin_pos.left,
                        width: 30,
                        height: 30,
                    },
                })
            }
        }
        e.stopPropagation();
        e.preventDefault();
    }

    onMouseMove(e) {
        if (!this.state.dragging) return;
        this.setState({
            rect: {
                top: e.pageY - this.state.offset.top,
                left: e.pageX - this.state.offset.left,
                width: 30,
                height: 30,
            },
        });
        e.stopPropagation();
        e.preventDefault();
    }

    onMouseDown(e) {
        // only left mouse button
        if (e.button !== 0) return;
        this.setState({
            dragging: true,
            offset: {
                top: e.pageY - this.state.rect.top,
                left: e.pageX - this.state.rect.left,
            },
            origin_pos: {top: this.state.rect.top, left: this.state.rect.left}
        });
        e.stopPropagation();
        e.preventDefault();
    }


    render() {
        const top = this.state.rect.top;
        const left = this.state.rect.left;
        const type = this.state.type;

        console.log("prev");
        console.log(this.state.prev_time);
        return (
            <div onMouseDown={(e) => this.onMouseDown(e)}>
                <div className="sprite" id={type} style={{top: top, left:left}}/ >
            </div>

        );
    }
}

export default Move;
