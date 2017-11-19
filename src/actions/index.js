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

function pos(data) {
  return {
    type: reducerType.POS,
    data,
  };
}


export default {
  saves,
  save,
  keyboard,
  pos,
};
