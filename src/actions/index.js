import * as reducerType from '../unit/reducerType';
import keyboard from './keyboard';


function save(data) {
  return {
    type: reducerType.SAVE,
    data,
  };
}

function saves(data) {
  return {
    type: reducerType.SAVES,
    data,
  };
}

export default {
  saves,
  save,
  keyboard,
};
