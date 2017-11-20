import { List } from 'immutable';
import * as reducerType from '../../util/reducerType';
import { lastRecord } from '../../util/const';

const initState = lastRecord && Array.isArray(lastRecord.mazeTools) ?
List(lastRecord.mazeTools) : [0, 0];

const mazeTools = (state = initState, action) => {
  switch (action.type) {
    case reducerType.MAZETOOLS:
      return action.data;
    default:
      return state;
  }
};

export default mazeTools;
