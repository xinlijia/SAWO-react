import React from 'react';
import propTypes from 'prop-types';
import Brick from './brick';

export default class Maze extends React.Component {

  constructor() {
    super();
    this.state = {
      tools: [],
      bricks: [
              { top: 10, left: 10, width: 15, height: 15 },
              { top: 10, left: 25, width: 15, height: 15 },
              { top: 10, left: 40, width: 15, height: 15 },
              { top: 10, left: 55, width: 15, height: 15 },
              { top: 10, left: 70, width: 15, height: 15 },
              { top: 10, left: 85, width: 15, height: 15 },
      ],
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
  tools: propTypes.object.isRequired,
  pos: propTypes.array.isRequired,
};
