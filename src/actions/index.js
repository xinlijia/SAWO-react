import * as reducerType from '../unit/reducerType';
import keyboard from './keyboard';


function save(data) {
  return {
    type: reducerType.SAVE,
    data,
  };
}

export default {
  save,
  keyboard,
};
