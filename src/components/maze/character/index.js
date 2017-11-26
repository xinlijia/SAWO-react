import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';
import style from './index.less';


export default class Character extends React.Component {

  constructor() {
    super();
    this.state = {
      pos: { top: 0, left: 0 },
      dir: 'down',
      still: true,
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
    return nextProps.pos !== props.pos ||
            nextProps.dir !== props.dir ||
            nextProps.still !== props.still;
  }
  onChange(nextProps = {}) {
    this.setState({
      pos: { top: nextProps.pos.get(0), left: nextProps.pos.get(1) },
      dir: nextProps.dir,
      still: nextProps.still,
    });
  }
  render() {
    // displacement for maze
    const top = this.state.pos.top + 100;
    const left = this.state.pos.left + 100;
    const dir = this.state.dir;
    const still = this.state.still ? 'still' : 'move';
    return (
      <div>
        <div
          className={cn({
            [style.sprite]: true,
            [style[still]]: true,
            [style[dir]]: true,
          })}
          style={{ top, left }}
        />
      </div>
    );
  }
}


Character.propTypes = {
  pos: propTypes.object.isRequired,
  dir: propTypes.string.isRequired,
  still: propTypes.bool.isRequired,
};
