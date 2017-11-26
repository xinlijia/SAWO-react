import React from 'react';
import propTypes from 'prop-types';
import Brick from './brick';
import Character from './character';
import mazeData from '../../resource/maze/maze.json';

export default class Maze extends React.Component {

  constructor() {
    super();
    this.state = {
      pos: { top: 0, left: 0 },
      tools: [],
      id: 0,
      characterPos: mazeData[0].characterPos,
      characterDir: 'down',
      bricks: mazeData[0].brick,
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
    return nextProps !== props;
  }
  onChange(nextProps = {}) {
    if (nextProps.mazeID !== this.state.id) {
      const newBricks = mazeData[nextProps.mazeID].brick;
      const newCharacterPos = mazeData[nextProps.mazeID].characterPos;
      this.setState({
        bricks: newBricks,
        characterPos: newCharacterPos,
      });
    }
    this.setState({
      tools: nextProps.tools,
      pos: nextProps.pos,
      characterPos: nextProps.characterPos,
      characterDir: nextProps.characterDir,
      characterStill: nextProps.characterStill,
    });
  }
  render() {
    const top = this.state.pos.top;
    const left = this.state.pos.left;
    return (
      <div>
        <Character
          pos={this.state.characterPos}
          dir={this.state.characterDir}
          still={this.state.characterStill}
        />
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
  characterPos: propTypes.object.isRequired,
  characterDir: propTypes.string.isRequired,
  characterStill: propTypes.bool.isRequired,
};
