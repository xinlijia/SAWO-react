import React from 'react';
import propTypes from 'prop-types';


const DF = 'DF';
const ZDF = 'ZDF';

export default class Point extends React.Component {
  constructor() {
    super();
    this.state = {
      label: '',
      number: 100,
    };
  }
  componentWillMount() {
    this.onChange(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.onChange(nextProps);
  }
  shouldComponentUpdate({ save }) {
    const props = this.props;
    return save !== props.save;
  }
  onChange({ save }) {
    clearInterval(Point.timeout);
    this.setState({
      label: save >= 10 ? ZDF : DF,
      number: save,
    });
  }
  render() {
    return (
      <div>
        <p>{ this.state.label }</p>
        <p>{ this.state.number }</p>
      </div>
    );
  }
}

Point.statics = {
  timeout: null,
};

Point.propTypes = {
  save: propTypes.number.isRequired,
};
