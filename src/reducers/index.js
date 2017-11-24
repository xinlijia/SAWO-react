import { combineReducers } from 'redux-immutable';
import characterPos from './characterPos';
import characterDir from './characterDir';
import characterStill from './characterStill';

import keyboard from './keyboard';
import scene from './scene';
import mazeTools from './mazeTools';

const rootReducer = combineReducers({
  characterPos,
  characterDir,
  characterStill,

  keyboard,
  scene,
  mazeTools,
});

export default rootReducer;
