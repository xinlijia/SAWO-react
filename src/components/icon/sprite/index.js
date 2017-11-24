import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

import style from './index.less';

export default class Sprite extends React.Component {

  constructor() {
    super();
    this.state = {
      top: 100,
      left: 100,
      type: 'pause_icon',
    };
  }

  render() {
    const top = this.props.pos[0];
    const left = this.props.pos[1];
    const type = this.state.type;
    return (
      <div
        className={cn({ [style.sprite]: true, [style[type]]: true })}
        style={{ top, left }}
      />
    );
  }
}

Sprite.propTypes = {
  pos: propTypes.array.isRequired,
};
