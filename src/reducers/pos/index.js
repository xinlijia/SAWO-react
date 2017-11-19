import { List } from 'immutable';
import * as reducerType from '../../unit/reducerType';
import { lastRecord } from '../../unit/const';

const initState = lastRecord && Array.isArray(lastRecord.pos) ?
List(lastRecord.pos) : [0, 0];

const pos = (state = initState, action) => {
  switch (action.type) {
    case reducerType.POS:
      return action.data;
    default:
      return state;
  }
};

export default pos;
