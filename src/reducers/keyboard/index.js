import { combineReducers } from 'redux-immutable';

import left from './left';
import right from './right';

const keyboardReducer = combineReducers({
  left,
  right,
});

export default keyboardReducer;
