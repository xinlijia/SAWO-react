import React from 'react';
// import cn from 'classnames';
import propTypes from 'prop-types';
// import style from './index.less';
// import { UP, DOWN, LEFT, RIGHT } from '../../unit/reducerTypes'
// import Sprite from '../sprite';


export default class Character extends React.Component {

  constructor() {
    super();
    this.state = {
      top: 100,
      left: 100,
    };
  }

  componentWillMount() {
    this.onChange(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.onChange(nextProps);
  }
  shouldComponentUpdate({ pos }) {
    const props = this.props;
    return pos !== props.pos;
  }
  onChange({ pos }) {
    this.setState({
      top: pos.get(0),
      left: pos.get(1),
    });
  }
  render() {
    return (
      <div>
        {this.state.top}
        {this.state.left}
      </div>
    );
  }
}


Character.propTypes = {
  pos: propTypes.object.isRequired,
};
