import * as reducerType from '../util/reducerType';
import keyboard from './keyboard';


function characterPos(data) {
  return {
    type: reducerType.CHARACTERPOS,
    data,
  };
}


export default {
  keyboard,
  characterPos,
};
