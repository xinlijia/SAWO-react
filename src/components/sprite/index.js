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
    };
  }

  render() {
    const top = this.props.pos.get(0);
    const left = this.props.pos.get(1);

    console.log(top);
    console.log(left);
    return (
      <div
        className={cn({ [style.sprite]: true })}
        style={{ top, left }}
      >
      123
      </div>
    );
  }
}

Sprite.propTypes = {
  pos: propTypes.object.isRequired,
};
