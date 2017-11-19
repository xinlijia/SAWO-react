import React from 'react';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import propTypes from 'prop-types';
import Point from '../components/point';
import Test from '../components/test';
import Character from '../components/character';

import Sprite from '../components/sprite';

// import Keyboard from '../components/keyboard';
// import { transform } from '../unit/const';

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
    //
  }
  componentDidMount() {
    states.auto();
  }

  render() {
    return (
      <div>
        <Point save={this.props.save} />
        <Test saves={this.props.saves} />
        <Character pos={this.props.pos} />
        <Sprite pos={this.props.pos} />
      </div>
    );
  }
}
App.propTypes = {
  save: propTypes.number.isRequired,
  saves: propTypes.object.isRequired,
  keyboard: propTypes.object.isRequired,
  pos: propTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  save: state.get('save'),
  saves: state.get('saves'),
  keyboard: state.get('keyboard'),
  pos: state.get('pos'),
});

export default connect(mapStateToProps)(App);
