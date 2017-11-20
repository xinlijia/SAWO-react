import { List } from 'immutable';
import * as reducerType from '../../util/reducerType';
import { lastRecord } from '../../util/const';

const initState = lastRecord && Array.isArray(lastRecord.characterPos) ?
List(lastRecord.characterPos) : [0, 0];

const characterPos = (state = initState, action) => {
  switch (action.type) {
    case reducerType.CHARACTERPOS:
      return action.data;
    default:
      return state;
  }
};

export default characterPos;
