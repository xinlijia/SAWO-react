import React from 'react';
import propTypes from 'prop-types';
import Sprite from '../sprite';

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
        <Sprite pos={this.props.pos} />
      </div>
    );
  }
}


Character.propTypes = {
  pos: propTypes.object.isRequired,
};
