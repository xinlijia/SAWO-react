import { combineReducers } from 'redux-immutable';
import save from './save';
import saves from './saves';
import pos from './pos';

import keyboard from './keyboard';

const rootReducer = combineReducers({
  save,
  saves,
  pos,
  keyboard,
});

export default rootReducer;
