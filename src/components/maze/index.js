import React from 'react';
import propTypes from 'prop-types';
import Brick from './brick';
import mazeData from '../../resource/maze/maze.json';

export default class Maze extends React.Component {

  constructor() {
    super();
    this.state = {
      pos: { top: 0, left: 0 },
      tools: [],
      bricks: mazeData[1].brick,
    };
  }

  componentWillMount() {
    this.onChange(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.onChange(nextProps);
  }
  shouldComponentUpdate(nextProps = {}) {
    const props = this.props;
    return nextProps.tools !== props.tools;
  }
  onChange(nextProps = {}) {
    this.setState({
      tools: nextProps.tools,
      pos: nextProps.pos,
    });
  }
  render() {
    const top = this.state.pos.top;
    const left = this.state.pos.left;
    return (
      <div>
        {this.state.bricks.map((item, index) =>
          <Brick
            key={index}
            top={top + item.top}
            left={left + item.left}
            width={item.width}
            height={item.height}
          />)}
      </div>
    );
  }
}


Maze.propTypes = {
  mazeID: propTypes.number.isRequired,
  tools: propTypes.object.isRequired,
  pos: propTypes.object.isRequired,
};
