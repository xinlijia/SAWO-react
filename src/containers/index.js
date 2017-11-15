import React from 'react';
import { connect } from 'react-redux';
// import classnames from 'classnames';
import propTypes from 'prop-types';
import Point from '../components/point';
import Test from '../components/test';
import Keyboard from '../components/keyboard';
import { transform } from '../unit/const';

import style from './index.less';

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
  //  states.left();
    states.auto();
  }
  resize() {
    this.setState({
      w: document.documentElement.clientWidth,
      h: document.documentElement.clientHeight,
    });
  }
  render() {
    let filling = 0;
    const size = (() => {
      const w = this.state.w;
      const h = this.state.h;
      const ratio = h / w;
      let scale;
      let css = {};
      if (ratio < 1.5) {
        scale = h / 960;
      } else {
        scale = w / 640;
        filling = (h - (960 * scale)) / scale / 3;
        css = {
          paddingTop: Math.floor(filling) + 42,
          paddingBottom: Math.floor(filling),
          marginTop: Math.floor(-480 - (filling * 1.5)),
        };
      }
      css[transform] = `scale(${scale})`;
      return css;
    })();

    return (
      <div
        className={style.app}
        style={size}
      >
        <Point save={this.props.save} />
        <Test saves={this.props.saves} />
        <Keyboard filling={filling} keyboard={this.props.keyboard} />

      </div>
    );
  }
}
App.propTypes = {
  save: propTypes.number.isRequired,
  saves: propTypes.object.isRequired,
  keyboard: propTypes.object.isRequired,

};

const mapStateToProps = (state) => ({
  save: state.get('save'),
  saves: state.get('saves'),
  keyboard: state.get('keyboard'),

});

export default connect(mapStateToProps)(App);
