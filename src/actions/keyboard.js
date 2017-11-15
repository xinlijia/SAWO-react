import * as reducerType from '../unit/reducerType';


function left(data) {
  return {
    type: reducerType.KEY_LEFT,
    data,
  };
}

function right(data) {
  return {
    type: reducerType.KEY_RIGHT,
    data,
  };
}

export default {
  left,
  right,
};
