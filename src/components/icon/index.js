import React from 'react';
// import propTypes from 'prop-types';
import cn from 'classnames';
import style from './index.less';

export default class Icon extends React.Component {

  constructor() {
    super();
    this.state = {
      pos: { x: 0, y: 0 },
      dragging: false,
      offset: null,
      type: 'start_icon',
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

  // calculate relative position to the mouse and set dragging=true

  onMouseUp(e) {
    this.setState({ dragging: false });
    e.stopPropagation();
    e.preventDefault();
  }

  onMouseMove(e) {
    if (!this.state.dragging) return;
    this.setState({
      pos: {
        x: e.pageX - this.state.offset.x,
        y: e.pageY - this.state.offset.y,
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
        x: e.pageX - this.state.pos.x,
        y: e.pageY - this.state.pos.y,
      },
    });
    e.stopPropagation();
    e.preventDefault();
  }


  render() {
    const top = this.state.pos.y;
    const left = this.state.pos.x;
    const type = this.state.type;
    return (
      <div onMouseDown={(e) => this.onMouseDown(e)}>
        <div
          className={cn({ [style.sprite]: true, [style[type]]: true })}
          style={{ top, left }}
        />
      </div>
    );
  }
}
