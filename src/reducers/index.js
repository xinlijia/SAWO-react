import { combineReducers } from 'redux-immutable';
import save from './save';
import saves from './saves';
import keyboard from './keyboard';

const rootReducer = combineReducers({
  save,
  saves,
  keyboard,
});

export default rootReducer;
