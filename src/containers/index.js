import React from 'react';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import propTypes from 'prop-types';
import Point from '../components/point';

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
    window.addEventListener('resize', this.resize.bind(this), true);
  }
  componentDidMount() {
  //   if (visibilityChangeEvent) { // 将页面的焦点变换写入store
  //     document.addEventListener(visibilityChangeEvent, () => {
  //       states.focus(isFocus());
  //     }, false);
  //   }

  //   if (lastRecord) { // 读取记录
  //     if (lastRecord.cur && !lastRecord.pause) { // 拿到上一次游戏的状态, 如果在游戏中且没有暂停, 游戏继续
  //       const speedRun = this.props.speedRun;
  //       let timeout = speeds[speedRun - 1] / 2; // 继续时, 给予当前下落速度一半的停留时间
  //       // 停留时间不小于最快速的速度
  //       timeout = speedRun < speeds[speeds.length - 1] ? speeds[speeds.length - 1] : speedRun;
  //       states.auto(timeout);
  //     }
  //     if (!lastRecord.cur) {
  //       states.overStart();
  //     }
  //   } else {
  //     states.overStart();
  //   }
    states.left();
    states.left();
  }
  resize() {
    this.setState({
      w: document.documentElement.clientWidth,
      h: document.documentElement.clientHeight,
    });
  }
  render() {
    return (
      <div>
        <Point save={this.props.save} />
      </div>
    );
  }
}
App.propTypes = {
  save: propTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  save: state.get('save'),
});

export default connect(mapStateToProps)(App);
