import React from 'react';
import { List } from 'immutable';

import { connect } from 'react-redux';
// import classnames from 'classnames';
import propTypes from 'prop-types';
import Character from '../components/character';
import Icon from '../components/icon';
import Maze from '../components/maze';
// import Keyboard from '../components/keyboard';
// import { transform } from '../util/const';

// import style from './index.less';

import states from '../control/states';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      w: document.documentElement.clientWidth,
      h: document.documentElement.clientHeight,
    };
  }
  componentWillMount() {
    states.start();
  }
  componentDidMount() {
    states.start();
  }

  render() {
    return (
      <div>
        <Character pos={this.props.characterPos} />
        <Icon pos={List([10, 10])} />

        <Maze
          tools={this.props.mazeTools}
          pos={[0, 0]}
        />
      </div>
    );
  }
}
App.propTypes = {
  keyboard: propTypes.object.isRequired,
  characterPos: propTypes.object.isRequired,
  mazeTools: propTypes.object.isRequired,

};

const mapStateToProps = (state) => ({
  keyboard: state.get('keyboard'),
  characterPos: state.get('characterPos'),
  mazeTools: state.get('mazeTools'),

});

export default connect(mapStateToProps)(App);
