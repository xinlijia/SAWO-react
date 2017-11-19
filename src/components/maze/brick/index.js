import React from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

import style from './index.less';

export default class Brick extends React.Component {

  constructor() {
    super();
    this.state = {
      top: 0,
      left: 0,
    };
  }

  render() {
    const top = this.props.top;
    const left = this.props.left;
    return (
      <div
        className={cn({ [style.brick]: true })}
        style={{ top, left }}
      />
    );
  }
}

Brick.propTypes = {
  top: propTypes.number.isRequired,
  left: propTypes.number.isRequired,
};
