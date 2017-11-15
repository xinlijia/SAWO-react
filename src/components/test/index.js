import React from 'react';
import propTypes from 'prop-types';

export default class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      save1: 0,
      save2: 0,
    };
  }
  componentWillMount() {
    this.onChange(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.onChange(nextProps);
  }
  shouldComponentUpdate({ saves }) {
    const props = this.props;
    return saves !== props.saves;
  }
  onChange({ saves }) {
    clearInterval(Test.timeout);
    this.setState({
      save1: saves.get(0),
      save2: saves.get(1),
    });
  }
  render() {
    return (
      <div>
        <p>{ this.state.save1 }</p>
        <p>{ this.state.save2 }</p>
      </div>
    );
  }
}

Test.statics = {
  timeout: null,
};

Test.propTypes = {
  saves: propTypes.object.isRequired,
};
