import React from 'react';
import propTypes from 'prop-types';
import Brick from './brick';
import mazeData from '../../resource/maze/maze.json';

export default class Maze extends React.Component {

  constructor() {
    super();
    this.state = {
      tools: [],
      bricks: mazeData.maze[1].brick,
    };
  }

  componentWillMount() {
    this.onChange(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.onChange(nextProps);
  }
  shouldComponentUpdate({ tools }) {
    const props = this.props;
    return tools !== props.tools;
  }
  onChange({ tools }) {
    this.setState({
      tools,
    });
  }
  render() {
    return (
      <div>
        {this.state.bricks.map((item, index) =>
          <Brick
            key={index}
            top={this.props.pos[0] + item.top}
            left={this.props.pos[1] + item.left}
          />)}
      </div>
    );
  }
}


Maze.propTypes = {
  mazeID: propTypes.number.isRequired,
  tools: propTypes.object.isRequired,
  pos: propTypes.array.isRequired,
};
