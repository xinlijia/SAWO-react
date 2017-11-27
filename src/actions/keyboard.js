import * as reducerType from '../util/reducerType';


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

function up(data) {
  return {
    type: reducerType.KEY_UP,
    data,
  };
}

function down(data) {
  return {
    type: reducerType.KEY_DOWN,
    data,
  };
}

function test(data) {
  return {
    type: reducerType.KEY_TEST,
    data,
  };
}

export default {
  left,
  right,
  up,
  down,
  test,
};
