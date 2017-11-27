import { combineReducers } from 'redux-immutable';

import left from './left';
import right from './right';
import up from './up';
import down from './down';
import test from './test';

const keyboardReducer = combineReducers({
  left,
  right,
  up,
  down,
  test,
});

export default keyboardReducer;
