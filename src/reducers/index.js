import { combineReducers } from 'redux-immutable';
import characterPos from './characterPos';

import keyboard from './keyboard';
import scene from './scene';
import mazeTools from './mazeTools';

const rootReducer = combineReducers({
  characterPos,
  keyboard,
  scene,
  mazeTools,
});

export default rootReducer;
