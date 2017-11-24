import * as reducerType from '../util/reducerType';
import keyboard from './keyboard';


function characterPos(data) {
  return {
    type: reducerType.CHARACTERPOS,
    data,
  };
}


function characterDir(data) {
  return {
    type: reducerType.CHARACTERDIR,
    data,
  };
}
function characterStill(data) {
  return {
    type: reducerType.CHARACTERSTILL,
    data,
  };
}

export default {
  keyboard,
  characterPos,
  characterDir,
  characterStill,

};
