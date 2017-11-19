import { List } from 'immutable';
import * as reducerType from '../../unit/reducerType';
import { lastRecord } from '../../unit/const';

// 0: title, 1: stage choose, 2: game scene
// 0-9 stage id
const initState = lastRecord && Array.isArray(lastRecord.scene) ?
List(lastRecord.scene) : [0, 0];

const scene = (state = initState, action) => {
  switch (action.type) {
    case reducerType.SCENE:
      return action.data;
    default:
      return state;
  }
};

export default scene;
